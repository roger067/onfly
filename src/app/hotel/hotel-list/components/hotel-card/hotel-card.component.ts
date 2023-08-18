import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Hotel } from 'src/app/shared/module/hotel';

@Component({
  selector: 'app-hotel-card',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.scss'],
})
export class HotelCardComponent {
  @Input() hotel: Hotel | undefined = undefined;

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

  toFloat(value: string) {
    return parseFloat(value);
  }

  convertToCurrency(price: number) {
    return Intl.NumberFormat('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price);
  }
}
