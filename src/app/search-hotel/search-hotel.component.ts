import { Component } from '@angular/core';

@Component({
  selector: 'app-search-hotel',
  templateUrl: './search-hotel.component.html',
  styleUrls: ['./search-hotel.component.scss'],
})
export class SearchHotelComponent {
  inputValue?: string;
  options: string[] = [];

  onSearchCity(event: FormDataEvent) {
    event.preventDefault();
  }

  onChangeCityValue(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    this.options = value
      ? ['Belo Horizonte', 'Rio de Janeiro', 'São Paulo'].filter((city) =>
          city.includes(value)
        )
      : [];

    this.inputValue = value;
  }
}
