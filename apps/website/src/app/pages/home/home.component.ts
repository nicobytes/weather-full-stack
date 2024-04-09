import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatGridListModule } from '@angular/material/grid-list';
import { PollutionComponent } from '@components/pollution/pollution.component';
import { WeatherComponent } from '@components/weather/weather.component';
import { ApiService } from '@services/api.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatGridListModule, PollutionComponent, WeatherComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {

  private service = inject(ApiService);
  pollutionData = toSignal(this.service.getPollutionData(-0.1257, 51.5085), {
    initialValue: 1
  });

  weatherData = toSignal(this.service.getWeather(-0.1257, 51.5085), {
    initialValue: null
  });


}
