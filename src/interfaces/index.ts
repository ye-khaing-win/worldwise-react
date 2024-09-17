export interface City {
  id: number;
  cityName: string;
  country: string;
  emoji: string;
  date: string;
  notes: string;
  position: CityPosition;
}

export interface CityPosition {
  lat: number;
  lng: number;
}
