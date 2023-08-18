import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { Hotel, HotelResponse } from '../shared/module/hotel';

@Injectable({
  providedIn: 'root',
})
export class HotelService {
  private hotelUrl = 'http://localhost:3000/hotelList';

  constructor(private http: HttpClient) {}

  getHotelList(placeFiltered?: number): Observable<HotelResponse[]> {
    return this.http.get<HotelResponse[]>(this.hotelUrl).pipe(
      map((res) => {
        if (!placeFiltered) return res;

        return res.filter((hotel) => hotel.placeId === placeFiltered);
      }),
      (error) => error
    );
  }

  getHotelListById(id: string): Observable<Hotel | undefined> {
    return this.http.get<HotelResponse[]>(this.hotelUrl).pipe(
      map((res: HotelResponse[]) => {
        const hotelItem = res.find((item) =>
          item.hotels.some((hotel) => hotel.id === Number(id))
        );
        if (hotelItem) {
          const matchingHotel = hotelItem.hotels.find(
            (hotel) => hotel.id === Number(id)
          );
          return matchingHotel;
        } else {
          throw new Error(`Hotel with ID ${id} not found.`);
        }
      }),
      (error) => error
    );
  }
}
