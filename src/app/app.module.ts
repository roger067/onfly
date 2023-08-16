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

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchHotelComponent } from './search-hotel/search-hotel.component';
import { FiltersAndNavigationComponent } from './filters-and-navigation/filters-and-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchHotelComponent,
    FiltersAndNavigationComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
