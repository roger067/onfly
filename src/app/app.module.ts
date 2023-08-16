import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
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

import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';

import { NzIconModule, NZ_ICONS } from 'ng-zorro-antd/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchHotelComponent } from './search-hotel/search-hotel.component';
import { FiltersAndNavigationComponent } from './filters-and-navigation/filters-and-navigation.component';
import { HotelCardComponent } from './hotel-card/hotel-card.component';

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};

const icons: IconDefinition[] = Object.keys(antDesignIcons).map((key) => {
  const i = antDesignIcons[key];
  return i;
});

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchHotelComponent,
    FiltersAndNavigationComponent,
    HotelCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzButtonModule,
    NzCardModule,
    NzFormModule,
    NzAutocompleteModule,
    NzInputModule,
    NzGridModule,
    NzBreadCrumbModule,
    FormsModule,
    BrowserAnimationsModule,
    NzTypographyModule,
    NzDropDownModule,
    NzIconModule,
    NzCarouselModule,
    NzRateModule,
    NzToolTipModule,
  ],
  providers: [
    {
      provide: NZ_ICONS,
      useValue: icons,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
