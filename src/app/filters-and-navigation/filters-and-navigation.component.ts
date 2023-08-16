import { Component } from '@angular/core';

@Component({
  selector: 'app-filters-and-navigation',
  templateUrl: './filters-and-navigation.component.html',
  styleUrls: ['./filters-and-navigation.component.scss'],
})
export class FiltersAndNavigationComponent {
  orderBy = 'price';

  onChangeFilter(filter: 'price' | 'rate') {
    this.orderBy = filter;
  }
}
