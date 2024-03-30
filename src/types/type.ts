export interface latlngCountry {
  lat: number;
  lng: number;
}

export interface cityInfo {
  country: string;
  lat: number;
  local_names: object;
  lon: number;
  name: string;
  state: string;
}

export interface InfoCountry {
  [key: string]: number | string | object | boolean | string[];
  capital: string[];
  name: {
    common: string;
  };
  capitalInfo: {
    latlng: [number,number];
  };
}

export interface infoPlace {
  region: string;
  name: string;
  temperature: number;
  timezone: number;
}

export interface weatherPlace {
  base: string;
  clouds: object;
  cod: number;
  coord: object;
  dt: number;
  id: number;
  main: {
    temp: number;
  };
  name: string;
  sys: object;
  timezone: number;
  visibility: number;
  weather: string[];
  wind: object;
}
