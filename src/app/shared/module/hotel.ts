export interface HotelResponse {
  hotels: Hotel[];
  placeId: number;
}

export interface Hotel {
  id: number;
  favorite: boolean;
  name: string;
  description: string;
  stars: string;
  thumb: string;
  amenities: {
    key: string;
    label: string;
  }[];
  hasBreakFast: boolean;
  hasRefundableRoom: boolean;
  hasAgreement: boolean;
  notRefundable: boolean;
  address: {
    street: string;
    number: string;
    district: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
    fullAddress: string;
  };
  images: string[];
  deals: number;
  roomsQuantity: number;
  price: number;
}
