import {ContactType} from './../modules/reservation.module';
import {Contact, ReservationList} from '../modules/reservation.module';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EMPTY, Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  baseUrl = 'http://localhost:3001/v1/public';

  constructor(private http: HttpClient) {
  }


  getReservations(): Observable<ReservationList[]> {
    return this.http.get<ReservationList[]>(`${this.baseUrl}/reservations`).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  getReservationById(id: number): Observable<ReservationList> {
    const url = `${this.baseUrl}/reservations/${id}`;
    return this.http.get<ReservationList>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  updateReservation(reservationList: ReservationList): Observable<ReservationList> {
    const url = `${this.baseUrl}/reservations/${reservationList.id}`;
    return this.http.put<ReservationList>(url, reservationList).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  createReservation(reservationList: ReservationList): Observable<ReservationList> {
    return this.http.post<ReservationList>(`${this.baseUrl}/reservations`, reservationList).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this.baseUrl}/contacts`).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  getContactById(id: number): Observable<Contact> {
    const url = `${this.baseUrl}/contacts/${id}`;
    return this.http.get<Contact>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  deleteContact(id: number): Observable<Contact> {
    const url = `${this.baseUrl}/contacts/${id}`;
    return this.http.delete<Contact>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  getContactType(): Observable<ContactType[]> {
    return this.http.get<ContactType[]>(`${this.baseUrl}/contact-type`).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  getContactTypeByName(contactType: string): Observable<ContactType> {
    return this.http.get<ContactType>(`${this.baseUrl}/contact-type/${contactType}`).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  createContactType(product: ContactType): Observable<ContactType> {
    return this.http.post<ContactType>(`${this.baseUrl}/contact-type`, product).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  createContact(product: Contact): Observable<Contact> {
    return this.http.post<Contact>(`${this.baseUrl}/contacts`, product).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  updateContact(contact: Contact): Observable<Contact> {
    const url = `${this.baseUrl}/contacts/${contact.id}`;
    return this.http.put<ReservationList>(url, contact).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    console.log('Error');
    return EMPTY;
  }

}
