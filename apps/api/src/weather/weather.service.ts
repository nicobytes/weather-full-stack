import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigType } from '@nestjs/config';
import config from '@src/config';
import {
  AirPollutionResponse,
  WeatherResponse,
} from '@src/models/api.interface';
import { map, switchMap } from 'rxjs';

@Injectable()
export class WeatherService {
  constructor(
    private http: HttpService,
    @Inject(config.KEY)
    private configService: ConfigType<typeof config>,
  ) {}

  getPollution(lat: number, lng: number) {
    const { url, key } = this.configService.open_weather;
    const path = `${url}/data/2.5/air_pollution?lat=${lat}&lon=${lng}&appid=${key}&units=metric`;
    return this.http.get<AirPollutionResponse>(path).pipe(
      map((response) => {
        const data = response.data;
        if (data.list.length === 0) {
          throw new NotFoundException();
        }
        return {
          aqi: data.list[0].main.aqi,
        };
      }),
    );
  }

  getWeather(lat: number, lng: number) {
    const { url, key } = this.configService.open_weather;
    const path = `${url}/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${key}&units=metric`;
    return this.http.get<WeatherResponse>(path).pipe(
      map((response) => {
        const data = response.data;
        const weather = data.weather[0];
        return {
          ...data,
          weather,
        };
      }),
      switchMap((data) => {
        return this.getCity(lat, lng).pipe(map((city) => ({ ...data, city })));
      }),
    );
  }

  getCity(lat: number, lng: number) {
    const { url, key } = this.configService.open_weather;
    const path = `${url}/geo/1.0/reverse?lat=${lat}&lon=${lng}&appid=${key}&limit=1`;
    return this.http.get(path).pipe(
      map((response) => {
        const data = response.data;
        if (data.length === 0) {
          return null;
        }
        return data[0];
      }),
    );
  }

  getForecast(lat: number, lng: number) {
    const { url, key } = this.configService.open_weather;
    const path = `${url}/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${key}&units=metric`;
    return this.http.get(path).pipe(
      map((response) => {
        const data = response.data;
        if (data.list === 0) {
          return [];
        }
        const group = data.list
          .map((item) => ({
            ...item,
            weather: item.weather.length === 0 ? null : item.weather[0],
          }))
          .reduce((acum, item) => {
            const date = new Date(item.dt_txt).toDateString();
            if (!acum[date]) {
              acum[date] = [];
            }
            acum[date].push(item);
            return acum;
          }, {});
        return Object.keys(group).map((key) => ({
          date: key,
          firstForecast: group[key].length === 0 ? null : group[key][0],
          forecast: group[key],
        }));
      }),
    );
  }

  searchCity(query: string) {
    const { url, key } = this.configService.open_weather;
    const path = `${url}/geo/1.0/direct?q=${query}&appid=${key}&limit=5`;
    return this.http.get(path).pipe(
      map((response) => {
        const data = response.data;
        const obj = data.reduce((acum, item) => {
          const key = `${item.lat}${item.lon}`;
          if (!acum[key]) {
            acum[key] = item;
          }
          return acum;
        }, {});
        return Object.values(obj);
      }),
    );
  }
}
