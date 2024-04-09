import { Component, computed, input, signal } from '@angular/core';
import { DecimalPipe, NgOptimizedImage, DatePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { WeatherResponse } from '@models/api.interface';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [ MatIconModule, DecimalPipe, NgOptimizedImage, DatePipe ],
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
  })
}
