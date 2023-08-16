import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-hotel-card',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.scss'],
})
export class HotelCardComponent {
  hotel = {
    id: 430,
    favorite: true,
    name: 'Nacional Inn Belo Horizonte',
    description:
      'Localizado no coração comercial e financeiro de Belo Horizonte, próximo aos principais centros de decisão da capital mineira, centros de convenções (Minascentro, Expominas), principais avenidas da cidade, fácil acesso as saídas e entradas para a cidade e ',
    stars: '3',
    thumb: 'https://s3.amazonaws.com/e-htl/uploads/hotels/10415/10415_10.JPG',
    amenities: [
      {
        key: 'WI_FI',
        label: 'Internet',
      },
      {
        key: 'RESTAURANT',
        label: 'Restaurante',
      },
      {
        key: 'ROOM_SERVICE',
        label: 'Serviço de quarto',
      },
    ],
    hasBreakFast: true,
    hasRefundableRoom: true,
    hasAgreement: false,
    nonRefundable: null,
    address: {
      street: 'Rua Espírito Santo',
      number: '215',
      district: 'Centro',
      city: 'Belo Horizonte',
      state: 'MG',
      country: 'BR',
      zipCode: null,
      fullAddress: 'Rua Espírito Santo, 215 - Centro',
    },
    images: [
      'https://s3.amazonaws.com/e-htl/uploads/hotels/10415/10415_10.JPG',
      'https://s3.amazonaws.com/e-htl/uploads/hotels/10415/10415_11.JPG',
      'https://s3.amazonaws.com/e-htl/uploads/hotels/10415/10415_12.JPG',
      'https://s3.amazonaws.com/e-htl/uploads/hotels/10415/10415_13.JPG',
      'https://s3.amazonaws.com/e-htl/uploads/hotels/10415/10415_3.jpg',
      'https://s3.amazonaws.com/e-htl/uploads/hotels/10415/10415_5.jpg',
      'https://s3.amazonaws.com/e-htl/uploads/hotels/10415/10415_6.jpg',
      'https://s3.amazonaws.com/e-htl/uploads/hotels/10415/10415_7.jpg',
      'https://s3.amazonaws.com/e-htl/uploads/hotels/10415/10415_8.jpg',
      'https://s3.amazonaws.com/e-htl/uploads/hotels/10415/10415_9.jpg',
      'https://s3.amazonaws.com/e-htl/uploads/hotels/logotipos/10415.jpg',
    ],
    deals: null,
    roomsQuantity: 2,
    price: 100,
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
