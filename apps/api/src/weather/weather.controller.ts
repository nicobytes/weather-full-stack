import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { WeatherService } from './weather.service';

@ApiTags('Weather')
@Controller()
export class WeatherController {
  constructor(private weatherService: WeatherService) {}

  @Get('/pollution')
  getPollution(@Query('lat') lat: number, @Query('lng') lng: number) {
    return this.weatherService.getPollution(lat, lng);
  }

  @Get('/weather')
  getWeather(@Query('lat') lat: number, @Query('lng') lng: number) {
    return this.weatherService.getWeather(lat, lng);
  }

  @Get('/uv_index')
  getUVIndex(@Query('lat') lat: number, @Query('lng') lng: number) {
    return this.weatherService.getPollution(lat, lng);
  }

  @Get('/hourly')
  getHourly(@Query('lat') lat: number, @Query('lng') lng: number) {
    return this.weatherService.getPollution(lat, lng);
  }

  @Get('/forecast')
  getForecast(@Query('lat') lat: number, @Query('lng') lng: number) {
    return this.weatherService.getForecast(lat, lng);
  }

  @Get('/city/:query')
  searchCity(@Param('query') query: string) {
    return this.weatherService.searchCity(query);
  }
}
