import { Injectable, Inject } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigType } from '@nestjs/config';
import config from '@src/config';
import { map } from 'rxjs';

@Injectable()
export class PollutionService {
  constructor(
    private http: HttpService,
    @Inject(config.KEY)
    private configService: ConfigType<typeof config>,
  ) {}

  getData(lat: number, lng: number) {
    const { url, key } = this.configService.open_weather;
    const path = `${url}/data/2.5/air_pollution?lat=${lat}&lon=${lng}&appid=${key}`;
    return this.http.get(path).pipe(map((response) => response.data));
  }
}
