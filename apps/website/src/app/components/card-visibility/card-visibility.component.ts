import { Component, input } from '@angular/core';
import { CardSimpleComponent } from '@components/card-simple/card-simple.component';

@Component({
  selector: 'app-card-visibility',
  standalone: true,
  imports: [ CardSimpleComponent ],
  templateUrl: './card-visibility.component.html'
})
export class CardVisibilityComponent {
  visibility = input.required<number>();
}
