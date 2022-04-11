export enum Gender {
  MAN = 'Hombre',
  WOMAN = 'Mujer',
}

export enum ContactTime {
  MORNING = 'Mañana',
  AFTERNOON = 'Tarde',
  NIGHT = 'Noche',
}

export interface ICustomer {
  _id?: string;
  user_id?: string;
  name?: string;
  date_of_birth?: string;
  gender?: Gender;
  email?: string;
  age?: number;
  phone_number?: string;
  contact_time?: ContactTime;
  city?: string;
  address?: string;
  createdAt?: string;
  updatedAt?: string;
}
