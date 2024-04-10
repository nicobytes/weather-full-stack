import { Component, OnInit, inject, signal, output } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { debounceTime, filter, startWith, switchMap } from 'rxjs/operators';
import { ApiService } from '@services/api.service';
import { City } from '@models/api.interface';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MatAutocompleteModule, ReactiveFormsModule, AsyncPipe],
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  myControl = new FormControl('', { nonNullable: true });
  options = signal<City[]>([]);
  service = inject(ApiService);
  onChooseCity = output<{lat: number, lng: number}>();

  ngOnInit() {
    this.myControl.valueChanges.pipe(
      startWith(''),
      debounceTime(350),
      filter(query => query.length > 3),
      switchMap(query => this.service.searchCity(query))
    ).subscribe(response => {
      this.options.set(response)
    });
  }

  displayFn(city: City): string {
    if (!city) return '';
    if (!city.state) {
      return `${city.name}, ${city.country}`;
    }
    return `${city.name}, ${city.state}, ${city.country}`;
  }

  chooseCity(event: MatAutocompleteSelectedEvent) {
    const {lat, lon} = event.option.value;
    this.onChooseCity.emit({
      lat,
      lng: lon
    });
  }
}
