import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service';
import { HotelResponse } from 'src/app/shared/module/hotel';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
})
export class HotelListComponent implements OnInit {
  public hotelList: HotelResponse[] = [];

  constructor(private hotelListService: HotelService) {}

  ngOnInit(): void {
    this.hotelListService.getHotelList().subscribe({
      next: (res) => (this.hotelList = res),
      error: (err) => console.log(err),
    });
  }
}
