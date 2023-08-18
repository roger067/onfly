import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HotelResponse } from '../shared/module/hotel';

@Injectable({
  providedIn: 'root',
})
export class HotelService {
  private hotelUrl = 'http://localhost:3000/hotelList';

  constructor(private http: HttpClient) {}

  getHotelList(): Observable<HotelResponse[]> {
    return this.http.get<HotelResponse[]>(this.hotelUrl).pipe(
      (res) => res,
      (error) => error
    );
  }
}
