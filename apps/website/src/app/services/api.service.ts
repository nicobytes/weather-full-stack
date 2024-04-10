import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { map } from 'rxjs';
import { WeatherResponse, ForecastResponse, CityResponse } from '@models/api.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private http = inject(HttpClient);

  constructor() { }

  getPollutionData(lat: number, lng: number) {
    const path = `${environment.apiUrl}/pollution?lat=${lat}&lng=${lng}`;
    return this.http.get<{ aqi: 1 | 2 | 3 | 4 | 5 }>(path)
      .pipe(
        map((response) => response.aqi)
      );
  }

  getWeather(lat: number, lng: number) {
    const path = `${environment.apiUrl}/weather?lat=${lat}&lng=${lng}`;
    return this.http.get<WeatherResponse>(path);
  }

  getForecast(lat: number, lng: number) {
    const path = `${environment.apiUrl}/forecast?lat=${lat}&lng=${lng}`;
    return this.http.get<ForecastResponse>(path)
      .pipe(
        map((response) => response.map(item => ({
          ...item,
          firstForecast: {
            ...item.firstForecast,
            dt: new Date(item.firstForecast.dt * 1000).getTime()
          },
          forecast: item.forecast.map(el => ({
            ...el,
            dt: new Date(el.dt * 1000).getTime()
          }))
        })))
      );
  }

  searchCity(query: string) {
    const path = `${environment.apiUrl}/city/${query}`;
    return this.http.get<CityResponse>(path);
  }
}
