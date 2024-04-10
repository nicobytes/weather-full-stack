import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  darkMode = signal<boolean>(true);

  constructor() { }

  toogleTheme() {
    this.darkMode.update(state => !state);
  }
}
