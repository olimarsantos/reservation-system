import { ReservationService } from '../../services/reservation.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reservation } from 'src/app/modules/reservation.module';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-create-reservation',
  templateUrl: './create-reservation.component.html',
  styleUrls: ['./create-reservation.component.css']
})
export class CreateReservationComponent implements OnInit {
  
  reservation: Reservation = {
    contactName: '',
    contactType: '',
    phone: '',
    birthDay: '',
    text: ''
  }

  constructor(
    private headerService: HeaderService,
    private reservationService: ReservationService,
    private router: Router) {
    headerService.headerData = {
      title: 'RESERVATION LIST',            
      routeUrl: ''
    }        
  }

  ngOnInit(): void {
  }

  createReservation(){
    this.reservationService.create(this.reservation).subscribe(() => {
      this.reservationService.showMessage('Produto criado!')
      this.router.navigate([''])
  })
  }

}
