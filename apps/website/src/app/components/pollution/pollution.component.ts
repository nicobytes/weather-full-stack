import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CardSimpleComponent } from '@components/card-simple/card-simple.component';

@Component({
  selector: 'app-pollution',
  standalone: true,
  imports: [MatIconModule, CardSimpleComponent],
  templateUrl: './pollution.component.html'
})
export class PollutionComponent {
  data = input<number>(1);
}
