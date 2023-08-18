import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelListComponent } from './hotel-list/hotel.list.component';
import { HotelDrawerComponent } from './hotel-detail/components/hotel-drawer/hotel-drawer.component';

const routes: Routes = [
  {
    path: '',
    component: HotelListComponent,
    children: [{ path: ':id', component: HotelDrawerComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelRoutingModule {}
