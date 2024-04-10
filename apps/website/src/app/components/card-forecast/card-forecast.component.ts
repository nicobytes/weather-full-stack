import { Component, input } from '@angular/core';
import { DatePipe, NgOptimizedImage } from '@angular/common';
import { CardSimpleComponent } from '@components/card-simple/card-simple.component';
import { ForecastResponse } from '@models/api.interface';

@Component({
  selector: 'app-card-forecast',
  standalone: true,
  imports: [ CardSimpleComponent, DatePipe, NgOptimizedImage ],
  templateUrl: './card-forecast.component.html'
})
export class CardForecastComponent {
  data = input.required<ForecastResponse>();
}
