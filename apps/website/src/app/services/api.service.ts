import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { map } from 'rxjs';
import { WeatherResponse } from '@models/api.interface';

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
}
