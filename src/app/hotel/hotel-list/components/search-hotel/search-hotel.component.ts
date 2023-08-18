import { Component, ViewEncapsulation } from '@angular/core';
import { PlaceService } from 'src/app/services/place.service';
import { Place } from 'src/app/shared/module/place';

@Component({
  selector: 'app-search-hotel',
  templateUrl: './search-hotel.component.html',
  encapsulation: ViewEncapsulation.None,
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

    const placeFiltered = this.placeOptions.find(
      (option) => option.placeId === Number(this.inputValue)
    )?.placeId;

    this.placeService.setPlaceFiltered(placeFiltered);
  }

  onChangeCityValue(value: string) {
    this.filteredOptions = this.placeOptions.filter(
      (option) => option.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
    );
  }
}
