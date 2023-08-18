import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzListModule } from 'ng-zorro-antd/list';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { NgOptimizedImage } from '@angular/common';

import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';

import { NzIconModule, NZ_ICONS } from 'ng-zorro-antd/icon';

import { SearchHotelComponent } from './hotel-list/components/search-hotel/search-hotel.component';
import { FiltersAndNavigationComponent } from './hotel-list/components/filters-and-navigation/filters-and-navigation.component';
import { HotelCardComponent } from './hotel-list/components/hotel-card/hotel-card.component';
import { HotelListComponent } from './hotel-list/hotel.list.component';
import { HotelDrawerComponent } from './hotel-detail/components/hotel-drawer/hotel-drawer.component';
import { HotelRoutingModule } from './hotel-routing.module';

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};

const icons: IconDefinition[] = Object.keys(antDesignIcons).map(
  (key) => antDesignIcons[key]
);

@NgModule({
  declarations: [
    SearchHotelComponent,
    FiltersAndNavigationComponent,
    HotelCardComponent,
    HotelListComponent,
    HotelDrawerComponent,
  ],
  exports: [
    SearchHotelComponent,
    FiltersAndNavigationComponent,
    HotelCardComponent,
    HotelListComponent,
    HotelDrawerComponent,
  ],
  imports: [
    ScrollingModule,
    CdkVirtualScrollViewport,
    HttpClientModule,
    RouterModule,
    FormsModule,
    CommonModule,
    NgOptimizedImage,
    NzButtonModule,
    NzCardModule,
    NzFormModule,
    NzAutocompleteModule,
    NzInputModule,
    NzGridModule,
    NzBreadCrumbModule,
    NzTypographyModule,
    NzDropDownModule,
    NzIconModule,
    NzCarouselModule,
    NzRateModule,
    NzToolTipModule,
    NzDrawerModule,
    HotelRoutingModule,
    NzListModule,
  ],
  providers: [
    {
      provide: NZ_ICONS,
      useValue: icons,
    },
  ],
})
export class HotelModule {}
