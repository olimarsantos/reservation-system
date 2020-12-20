import {ContactType} from './../modules/reservation.module';
import {Reservation, ReservationList} from '../modules/reservation.module';
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

  getContacts(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.baseUrl}/contacts`).pipe(
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

  create(product: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(`${this.baseUrl}/reservations`, product).pipe(
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
