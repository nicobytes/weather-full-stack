import { Component, input } from '@angular/core';
import { CardSimpleComponent } from '@components/card-simple/card-simple.component';

@Component({
  selector: 'app-card-humidity',
  standalone: true,
  imports: [ CardSimpleComponent ],
  templateUrl: './card-humidity.component.html'
})
export class CardHumidityComponent {
  humidity = input.required<number>();
}
