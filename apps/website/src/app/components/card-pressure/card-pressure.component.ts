import { Component, input } from '@angular/core';
import { CardSimpleComponent } from '@components/card-simple/card-simple.component';

@Component({
  selector: 'app-card-pressure',
  standalone: true,
  imports: [ CardSimpleComponent ],
  templateUrl: './card-pressure.component.html'
})
export class CardPressureComponent {
  pressure = input.required<number>();
}
