import { Reservation, ReservationList } from '../modules/reservation.module';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";


@Injectable({
    providedIn: "root",
  })
  export class ReservationService {
    baseUrl = "http://localhost:3001/v1/public/reservations";
  
    constructor(private http: HttpClient){ }

    read(): Observable<ReservationList[]> {
        return this.http.get<ReservationList[]>(this.baseUrl).pipe(
          map((obj) => obj),
          catchError((e) => this.errorHandler(e))
        );
    }

    create(product: Reservation): Observable<Reservation> {
      return this.http.post<Reservation>(this.baseUrl, product).pipe(
        map((obj) => obj),
        catchError((e) => this.errorHandler(e))
      );
    }

    showMessage(msg: string, isError: boolean = false): void {
      console.log('create')
    }
    
    errorHandler(e: any): Observable<any> {
        console.log('Error');
        return EMPTY;
    }

}
