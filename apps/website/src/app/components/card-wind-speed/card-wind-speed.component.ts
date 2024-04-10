import { Component, input } from '@angular/core';
import { CardSimpleComponent } from '@components/card-simple/card-simple.component';

@Component({
  selector: 'app-card-wind-speed',
  standalone: true,
  imports: [CardSimpleComponent],
  templateUrl: './card-wind-speed.component.html'
})
export class CardWindSpeedComponent {
  data = input.required<number>();
}
