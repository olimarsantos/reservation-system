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
