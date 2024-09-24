export interface City {
  id?: number;
  cityName: string;
  country: string;
  emoji: string;
  date: string | Date;
  notes: string;
  position: CityPosition;
}

export interface CityPosition {
  lat: number;
  lng: number;
}

export interface CityData {
  city: string;
  continent: string;
  continentCode: string;
  countryCode: string;
  countryName: string;
  latitude: number;
  locality: string;
  localityLanguageRequested: string;
  longitude: number;
  lookupSource: string;
  plusCode: string;
  postcode: string;
  principalSubdivision: string;
  principalSubdivisionCode: string;
}
