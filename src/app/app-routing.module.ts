import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'hotel-list' },
  {
    path: '',
    component: NavbarComponent,
    children: [
      {
        path: 'hotel-list',
        loadChildren: () =>
          import('./hotel/hotel.module').then((m) => m.HotelModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
