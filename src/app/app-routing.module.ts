import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelListComponent } from './hotel/hotel-list/hotel.list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'hotel-list' },
  {
    path: 'hotel-list',
    component: HotelListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
