import {Component, ElementRef} from '@angular/core';
import {LazyLoadEvent, PrimeNGConfig} from 'primeng/api';

import {ReservationList} from '../../modules/reservation.module';
import {ReservationService} from '../../services/reservation.service';
import {HeaderService} from './../../services/header.service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent {

  datasource: ReservationList[];

  reservations: ReservationList[];

  totalRecords: number;

  loading: boolean;

  constructor(
    private primengConfig: PrimeNGConfig,
    private reservationService: ReservationService,
    private headerService: HeaderService) {
    headerService.headerData = {
      title: 'CREATE RESERVATION',
      routeUrl: 'reservation/create'
    };
  }

  ngOnInit() {
    this.reservationService.getReservations().subscribe(reservations => {
      this.datasource = reservations;
      this.totalRecords = reservations.length;
    });

    this.loading = true;
    this.primengConfig.ripple = true;
  }

  loadCustomers(event: LazyLoadEvent) {
    this.loading = true;

    setTimeout(() => {
      if (this.datasource) {
        this.reservations = this.datasource.slice(event.first, (event.first + event.rows));
        this.loading = false;
      }
    }, 400);

    if (event?.sortField) {
      this.sort(event?.sortField, event?.sortOrder);
    }
  }

  sort(fieldName: string, order: number) {
    this.datasource.sort((row1, row2) => {
      const val1 = row1[fieldName];
      const val2 = row2[fieldName];
      if (val1 === val2) {
        return 0;
      }
      let result = -1;
      if (val1 > val2) {
        result = 1;
      }
      if (order < 0) {
        result = -result;
      }
      return result;
    });
  }

  updateRatingValue(reservation: ReservationList, newValue) {
    reservation.rating = newValue;
    this.reservationService.updateReservation(reservation).subscribe(() => {
    });
  }

  changeColor(el: ElementRef) {
    el.nativeElement.style.color = '#e35e6b';
  }
}
