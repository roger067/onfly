import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelDrawerComponent } from './hotel-drawer.component';

describe('HotelDrawerComponent', () => {
  let component: HotelDrawerComponent;
  let fixture: ComponentFixture<HotelDrawerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotelDrawerComponent]
    });
    fixture = TestBed.createComponent(HotelDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
