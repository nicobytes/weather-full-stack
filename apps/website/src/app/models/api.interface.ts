export interface Coord {
  lon: number;
  lat: number;
}

export type AirQualityData = {
  dt: number;
  main: {
    aqi: 1 | 2 | 3 | 4 | 5;
  };
  components: {
    co: number;
    no: number;
    no2: number;
    o3: number;
    so2: number;
    pm2_5: number;
    pm10: number;
    nh3: number;
  };
};

export type AirPollutionResponse = {
  coord: Coord;
  list: AirQualityData[];
};

export interface City {
  name: string
  lat: number
  lon: number
  country: string
  state: string
}

export interface WeatherResponse {
  coord: Coord;
  weather: Weather;
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
  city: City;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

export interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

export interface Clouds {
  all: number;
}

export interface Sys {
  sunrise: number;
  sunset: number;
}


export interface ForecastItem {
  main: Main;
  weather: Weather;
  dt_txt: string;
  dt: number;
}

export type ForecastResponse = Array<{
  date: string;
  firstForecast: ForecastItem;
  forecast: ForecastItem[];
}>;


export interface City {
  name: string;
  country: string;
  lat: number;
  lon: number;
}

export type CityResponse = City[];
