import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzGridModule } from 'ng-zorro-antd/grid';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchHotelComponent } from './search-hotel/search-hotel.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, SearchHotelComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzButtonModule,
    NzCardModule,
    NzFormModule,
    NzInputModule,
    NzGridModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
