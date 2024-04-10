import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-card-simple',
  standalone: true,
  imports: [ MatIconModule ],
  templateUrl: './card-simple.component.html',
})
export class CardSimpleComponent {
  title = input.required<string>();
  icon = input.required<string>();
}
