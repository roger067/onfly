import { Component } from '@angular/core';

@Component({
  selector: 'app-search-hotel',
  templateUrl: './search-hotel.component.html',
  styleUrls: ['./search-hotel.component.scss'],
})
export class SearchHotelComponent {
  inputValue?: string;
  filteredOptions: string[] = [];
  options = ['Belo Horizonte', 'Rio de Janeiro', 'São Paulo'];

  constructor() {
    this.filteredOptions = this.options;
  }

  onSearchCity() {}

  onChangeCityValue(value: string) {
    this.filteredOptions = this.options.filter(
      (option) => option.toLowerCase().indexOf(value.toLowerCase()) !== -1
    );
  }
}
