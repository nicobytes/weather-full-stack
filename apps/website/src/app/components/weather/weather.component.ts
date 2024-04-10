import { Component, computed, input, signal } from '@angular/core';
import { DecimalPipe, NgOptimizedImage, DatePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { WeatherResponse } from '@models/api.interface';
import { CardSimpleComponent } from '@components/card-simple/card-simple.component';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [ MatIconModule, DecimalPipe, NgOptimizedImage, DatePipe, CardSimpleComponent ],
  templateUrl: './weather.component.html'
})
export class WeatherComponent {
  data = input<WeatherResponse | null>(null);
  today = signal(Date.now());
  imgUrl = computed(() => {
    const data = this.data();
    if (!data) {
      return null;
    }
    return `http://openweathermap.org/img/wn/${data.weather.icon}@4x.png`;
  });
  title = computed(() => {
    const data = this.data();
    if (!data) {
      return '';
    }
    if (!data.city.state) {
      return `${data.city.name}, ${data.city.country}`;
    }
    return `${data.city.state}, ${data.city.country}`;
  });
}
