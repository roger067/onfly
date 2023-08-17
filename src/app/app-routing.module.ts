import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelListComponent } from './hotel/hotel-list/hotel.list.component';
import { HotelDrawerComponent } from './hotel/hotel-detail/components/hotel-drawer/hotel-drawer.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'hotel-list' },
  {
    path: 'hotel-list',
    component: HotelListComponent,
    children: [
      {
        path: ':id',
        component: HotelDrawerComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
