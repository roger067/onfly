import { Component, OnInit } from '@angular/core';
import { Hotel, HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
})
export class HotelListComponent implements OnInit {
  public hotelList: Hotel[] = [];

  constructor(private hotelListService: HotelService) {}

  ngOnInit(): void {
    this.hotelList = this.hotelListService.getHotelList();
  }
}
