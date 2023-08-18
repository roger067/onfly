import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelService } from 'src/app/services/hotel.service';
import { Hotel } from 'src/app/shared/module/hotel';

@Component({
  selector: 'app-hotel-drawer',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './hotel-drawer.component.html',
  styleUrls: ['./hotel-drawer.component.scss'],
})
export class HotelDrawerComponent implements AfterViewInit {
  public hotel?: Hotel;
  visible = false;
  amenitiesToShow = 4;

  constructor(
    private hotelDetail: HotelService,
    private router: Router,
    private cdRef: ChangeDetectorRef,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];

      this.hotelDetail.getHotelListById(id).subscribe({
        next: (res) => (this.hotel = res),
        error: (err) => console.log(err),
      });
    });
  }

  amenities: { [key: string]: string } = {
    WI_FI: 'wifi',
    RESTAURANT: 'rest',
    ROOM_SERVICE: 'home',
    PUB: 'shop',
    POOL: 'experiment',
    PETS: 'bug',
    AIR_CONDITIONING: '',
    SAFE: 'safety',
    PARKING: 'car',
    LAUNDRY: 'skin',
    BREAKFAST: 'coffee',
    FITNESS_CENTER: 'sliders',
    MEETING_ROOM: 'audio',
    STEAM_ROOM: 'fire',
  };

  ngAfterViewInit(): void {
    this.visible = true;
    this.cdRef.detectChanges();
  }

  toFloat(value: string) {
    return parseFloat(value);
  }

  close() {
    this.router.navigate(['/hotel-list']);
  }

  showMoreAmenities() {
    this.amenitiesToShow = this.hotel?.amenities?.length || 4;
  }
}
