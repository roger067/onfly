import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-filters-and-navigation',
  templateUrl: './filters-and-navigation.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./filters-and-navigation.component.scss'],
})
export class FiltersAndNavigationComponent {
  orderBy = 'price';
  placeName = '';

  onChangeFilter(filter: 'price' | 'rate') {
    this.orderBy = filter;
  }
}
