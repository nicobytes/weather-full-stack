import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { AirPollutionResponse } from '@models/api.interface';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private http = inject(HttpClient);

  constructor() { }

  getPollutionData() {
    const path = `${environment.apiUrl}/pollution?lat=-0.1257&lng=51.5085`;
    return this.http.get<AirPollutionResponse>(path)
      .pipe(
        map((response) => {
          const data = response.list;
          if (data.length > 0) {
            return data[0].main.aqi;
          }
          return 0;
        })
      );
  }
}
