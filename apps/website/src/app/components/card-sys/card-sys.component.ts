import { Component, input } from '@angular/core';
import { CardSimpleComponent } from '@components/card-simple/card-simple.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-card-sys',
  standalone: true,
  imports: [ CardSimpleComponent, DatePipe ],
  templateUrl: './card-sys.component.html',
})
export class CardSysComponent {
  sunset = input.required<number>();
  sunrise = input.required<number>();
}
