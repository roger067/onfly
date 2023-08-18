import { Component } from '@angular/core';
import { PlaceService } from 'src/app/services/place.service';
import { Place } from 'src/app/shared/module/place';

@Component({
  selector: 'app-search-hotel',
  templateUrl: './search-hotel.component.html',
  styleUrls: ['./search-hotel.component.scss'],
})
export class SearchHotelComponent {
  inputValue?: string;
  hasSearched = false;
  filteredOptions: Place[] = [];
  placeOptions: Place[] = [];

  constructor(private placeService: PlaceService) {}

  ngOnInit(): void {
    this.placeService.getPlaceOptions().subscribe({
      next: (res) => {
        this.placeOptions = res;
        this.filteredOptions = res;
      },
      error: (err) => console.log(err),
    });
  }

  onSearchCity() {
    this.hasSearched = true;
  }

  onChangeCityValue(value: string) {
    this.filteredOptions = this.placeOptions.filter(
      (option) => option.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
    );
  }
}
