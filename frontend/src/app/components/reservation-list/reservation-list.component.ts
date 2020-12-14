import {Component} from '@angular/core';
import { ElementRef } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

import { ReservationList } from '../../modules/reservation.module';
import { ReservationService } from '../../services/reservation.service'
import { HeaderService } from './../../services/header.service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent {

  datasource: ReservationList[];

    reservations: ReservationList[];

    totalRecords: number;

    cols: any[];

    loading: boolean;

    constructor(        
        private primengConfig: PrimeNGConfig,
        private reservationService: ReservationService,
        private headerService: HeaderService) {
          headerService.headerData = {
            title: 'CREATE RESERVATION',            
            routeUrl: 'reservation/create'
          }        
        }

    ngOnInit() {        
        this.reservationService.read().subscribe(reservations => {
            this.datasource = reservations
            this.totalRecords = reservations.length
          })

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
    }

    changeColor(el: ElementRef){
      el.nativeElement.style.color = '#e35e6b'
    }
}