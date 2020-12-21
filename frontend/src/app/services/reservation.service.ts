import {ContactType} from './../modules/reservation.module';
import {Contact, ReservationList} from '../modules/reservation.module';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, EMPTY} from 'rxjs';
import {map, catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  baseUrl = 'http://localhost:3001/v1/public';

  constructor(private http: HttpClient) {
  }


  read(): Observable<ReservationList[]> {
    return this.http.get<ReservationList[]>(`${this.baseUrl}/reservations`).pipe(
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

  getContactType(): Observable<ContactType[]> {
    return this.http.get<ContactType[]>(`${this.baseUrl}/contact-type`).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  create(product: Contact): Observable<Contact> {
    return this.http.post<Contact>(`${this.baseUrl}/reservations`, product).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(reservationList: ReservationList): Observable<ReservationList> {
    const url = `${this.baseUrl}/${reservationList.id}`;
    return this.http.put<ReservationList>(url, reservationList).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  showMessage(msg: string, isError: boolean = false): void {
    console.log('create');
  }

  errorHandler(e: any): Observable<any> {
    console.log('Error');
    return EMPTY;
  }

}
