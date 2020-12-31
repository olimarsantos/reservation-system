export interface ReservationList {
  id?: number;
  name: string;
  description: string;
  rating: number;
  favorite: boolean;
  contactId: number;
  text: string;
}

export interface Contact {
  id?: number;
  contactName: string;
  contactType: string;
  phone: string;
  birthDate: Date;
}

export interface ContactType {
  id: number;
  type: string;
}

export enum listOfNum {
  n1,
  n2,
  n3,
  n4,
  n5,
  n6
}

export enum listOfName {
  n1 = 'Secod Dock',
  n2 = 'Primer Puerto',
  n3 = 'Stella',
  n4 = 'Island Creek',
  n5 = 'Fogo the Chao',
  n6 = 'Fontana',
}

export enum listOfDescription {
  n1 = 'Saturday May 17 at 9:00 PM',
  n2 = 'Sunday May 18 at 8:00 PM',
  n3 = 'Tuesday May 20 at 7:00 PM',
  n4 = 'Wednesday May at 8:00 PM',
  n5 = 'Saturday May 17 at 9:00 AM',
  n6 = 'Tuesday May 20 at 3:00 PM',
}
