import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersAndNavigationComponent } from './filters-and-navigation.component';

describe('FiltersAndNavigationComponent', () => {
  let component: FiltersAndNavigationComponent;
  let fixture: ComponentFixture<FiltersAndNavigationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiltersAndNavigationComponent]
    });
    fixture = TestBed.createComponent(FiltersAndNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
