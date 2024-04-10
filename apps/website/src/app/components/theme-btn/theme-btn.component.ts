import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { UiService } from '@services/ui.service';

@Component({
  selector: 'app-theme-btn',
  standalone: true,
  imports: [ MatIconModule ],
  templateUrl: './theme-btn.component.html'
})
export class ThemeBtnComponent {

  uiService = inject(UiService);
  darkMode = this.uiService.darkMode;

  toogleTheme() {
    this.uiService.toogleTheme();
  }

}
