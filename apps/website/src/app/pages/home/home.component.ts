import { Component, computed, effect, inject, signal, Injector, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Geolocation } from '@capacitor/geolocation';
import { DOCUMENT } from '@angular/common';
import { PollutionComponent } from '@components/pollution/pollution.component';
import { WeatherComponent } from '@components/weather/weather.component';
import { CardWindSpeedComponent } from '@components/card-wind-speed/card-wind-speed.component';
import { CardSysComponent } from '@components/card-sys/card-sys.component';
import { CardPressureComponent } from '@components/card-pressure/card-pressure.component';
import { CardVisibilityComponent } from '@components/card-visibility/card-visibility.component';
import { CardHumidityComponent } from '@components/card-humidity/card-humidity.component';
import { CardForecastComponent } from '@components/card-forecast/card-forecast.component';
import { ThemeBtnComponent } from '@components/theme-btn/theme-btn.component';
import { SearchComponent } from '@components/search/search.component';
import { ApiService } from '@services/api.service';
import { ForecastResponse, WeatherResponse } from '@models/api.interface';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatIconModule, PollutionComponent, SearchComponent,WeatherComponent, CardWindSpeedComponent, CardSysComponent, CardPressureComponent, CardVisibilityComponent, CardHumidityComponent, CardForecastComponent, ThemeBtnComponent],
  templateUrl: './home.component.html'
})
export default class HomeComponent implements OnInit {

  private service = inject(ApiService);
  private injector = inject(Injector);
  private document = inject(DOCUMENT);

  coords = signal({ lat: -17.3936114, lng: -66.1568983 });
  watchID = signal<string | null>(null);

  pollution = signal<number>(1);
  weatherData = signal<WeatherResponse | null>(null);
  forecastData = signal<ForecastResponse>([]);
  windSpeed = computed(() => {
    const data = this.weatherData();
    if (!data) {
      return 0;
    }
    return data.wind.speed;
  });
  sunset = computed(() => {
    const data = this.weatherData();
    if (!data) {
      return 0;
    }
    return new Date(data.sys.sunset * 1000).getTime();
  });
  sunrise = computed(() => {
    const data = this.weatherData();
    if (!data) {
      return 0;
    }
    return new Date(data.sys.sunrise * 1000).getTime();
  });
  pressure = computed(() => {
    const data = this.weatherData();
    if (!data) {
      return 0;
    }
    return data.main.pressure;
  });
  visibility = computed(() => {
    const data = this.weatherData();
    if (!data) {
      return 0;
    }
    return data.visibility / 1000;
  });
  humidity = computed(() => {
    const data = this.weatherData();
    if (!data) {
      return 0;
    }
    return data.main.humidity;
  });

  ngOnInit() {
    this.trackSignalGeolocation();
    this.watchPosition();
  }

  trackSignalGeolocation() {
    effect(() => {
      const coords = this.coords();
      this.getData(coords.lat, coords.lng);
    }, { injector: this.injector });
  }

  async getCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition({
      timeout: 5000,
    });
    this.coords.set({
      lat: coordinates.coords.latitude,
      lng: coordinates.coords.longitude
    });
    this.watchPosition();
  }

  async watchPosition() {
    const watchID = await Geolocation.watchPosition({
      enableHighAccuracy: true,
      timeout: 300000,
      maximumAge: 0
    }, (position) => {
      if (position) {
        const { coords } = position;
        console.log('watchPosition', coords.latitude, coords.longitude);
        this.coords.set({
          lat: coords.latitude,
          lng: coords.longitude
        });
      }
    });
    this.watchID.set(watchID);
  }

  private getData(lat: number, lng: number) {
    this.service.getPollutionData(lat, lng)
      .subscribe((data) => {
        this.pollution.set(data);
      });
    this.service.getForecast(lat, lng)
      .subscribe((data) => {
        this.forecastData.set(data);
      });
    this.service.getWeather(lat, lng)
      .subscribe((data) => {
        this.weatherData.set(data);
        this.document.getElementById('appFavicon')?.setAttribute('href', `https://openweathermap.org/img/wn/${data.weather.icon}@2x.png`);
      });
  }

  onChangeCity(data: { lat: number, lng: number }) {
    this.coords.set(data);
    const watchID = this.watchID();
    if (watchID) {
      Geolocation.clearWatch({ id: watchID });
    }
  }

}
