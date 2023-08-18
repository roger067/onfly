import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Place } from '../shared/module/place';

@Injectable({
  providedIn: 'root',
})
export class PlaceService {
  private PlaceUrl = 'http://localhost:3000/place';

  private placeFiltered?: number;

  constructor(private http: HttpClient) {}

  getPlaceOptions(): Observable<Place[]> {
    return this.http.get<Place[]>(this.PlaceUrl).pipe(
      (res) => res,
      (error) => error
    );
  }

  getPlaceFiltered() {
    return this.placeFiltered;
  }

  setPlaceFiltered(placeValue?: number) {
    this.placeFiltered = placeValue;
  }
}
