import { Component, inject, signal, HostBinding, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { UiService } from '@services/ui.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<div class="bg-gray-50 dark:bg-slate-900">
    <router-outlet />
  </div>`,
})
export class AppComponent implements OnInit {
  matIconReg = inject(MatIconRegistry);
  darkMode = signal<boolean>(true);
  @HostBinding('class.dark') get mode() { return this.uiService.darkMode() }

  uiService = inject(UiService);

  ngOnInit() {
    this.matIconReg.setDefaultFontSetClass('material-symbols-outlined');
  }

}
