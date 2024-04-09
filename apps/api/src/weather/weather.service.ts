import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigType } from '@nestjs/config';
import config from '@src/config';
import {
  AirPollutionResponse,
  WeatherResponse,
} from '@src/models/api.interface';
import { map } from 'rxjs';

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
    );
  }
}
