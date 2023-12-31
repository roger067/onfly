import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchHotelComponent } from './search-hotel.component';

describe('SearchHotelComponent', () => {
  let component: SearchHotelComponent;
  let fixture: ComponentFixture<SearchHotelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchHotelComponent]
    });
    fixture = TestBed.createComponent(SearchHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
