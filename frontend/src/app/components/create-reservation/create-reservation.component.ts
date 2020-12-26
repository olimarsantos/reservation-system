import {ContactType} from './../../modules/reservation.module';
import {ReservationService} from '../../services/reservation.service';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Contact} from 'src/app/modules/reservation.module';
import {HeaderService} from 'src/app/services/header.service';

@Component({
  selector: 'app-create-reservation',
  templateUrl: './create-reservation.component.html',
  styleUrls: ['./create-reservation.component.css']
})
export class CreateReservationComponent implements OnInit {

  selected: string;

  selectedContact: Contact;

  filteredContacts: any[];

  birthDate: Date;

  reservations: Contact[];

  contactsType: ContactType[];

  filteredContactsType: any[];

  selectedContactType: string;

  reservation: Contact = {
    contactName: '',
    contactType: '',
    phone: '',
    birthDate: new Date(),
    text: ''
  };

  filterContact(event) {
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.reservations.length; i++) {
      let country = this.reservations[i];
      if (country.contactName.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        this.selectedContact = this.reservations[i];
        filtered.push(country.contactName);
      }
    }
    this.filteredContacts = filtered;
  }

  filterContactType() {
    let filtered: any[] = [];
    for (let i = 0; i < this.contactsType.length; i++) {
      filtered.push(this.contactsType[i].type);
    }
    this.filteredContactsType = filtered;
  }

  afterSeletedContact() {
    this.reservation = this.selectedContact;
    this.birthDate = new Date(this.selectedContact.birthDate);
    this.selectedContactType = this.reservation.contactType;
  }

  afterSeletedContactType() {
    this.reservation.contactType = this.selectedContactType;
  }

  constructor(
    private headerService: HeaderService,
    private reservationService: ReservationService,
    private router: Router) {
    headerService.headerData = {
      title: 'RESERVATION LIST',
      routeUrl: ''
    };
  }

  ngOnInit(): void {
    this.reservationService.getContacts().subscribe(reservations => {
      this.reservations = reservations;
    });

    this.reservationService.getContactType().subscribe(contactType => {
      this.contactsType = contactType;
    });
  }

  createReservation() {
    this.reservationService.createContact(this.reservation).subscribe(() => {
      this.router.navigate(['']);
    });
  }
}
