// Type untuk response asli dari randomuser.me
export interface RandomUserApiResponse {
  results: RandomUserRaw[];
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
}

export interface RandomUserRaw {
  gender: string;
  name: { title: string; first: string; last: string };
  location: {
    street: { number: number; name: string };
    city: string;
    state: string;
    country: string;
    postcode: number | string;
    coordinates: { latitude: string; longitude: string };
    timezone: { offset: string; description: string };
  };
  email: string;
  login: { uuid: string; username: string };
  dob: { date: string; age: number };
  phone: string;
  cell: string;
  picture: { large: string; medium: string; thumbnail: string };
}

// Type untuk format output yang sudah disederhanakan
export interface UserFormatted {
  name: string;
  location: string;
  email: string;
  age: number;
  phone: string;
  cell: string;
  picture: string[];
}