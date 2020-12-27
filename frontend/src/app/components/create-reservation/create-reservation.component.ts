import {ContactType, ReservationList} from './../../modules/reservation.module';
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

  selectedContactName: string;

  selectedContact: Contact;

  reservations: Contact[];

  contactsType: ContactType[];

  filteredContactsType: any[];

  filteredContacts: any[];

  birthDate: Date;

  selectedContactType: string;

  contact: Contact = {
    id: 0,
    contactName: '',
    contactType: '',
    phone: '',
    birthDate: new Date()
  };

  reservation: ReservationList = {
    rating: 5,
    name: 'Padrão',
    description: 'Descrição padrão',
    favorite: false,
    contactId: 0,
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
    this.contact = this.selectedContact;
    this.birthDate = new Date(this.selectedContact.birthDate);
    this.selectedContactType = this.contact.contactType;
  }

  afterSeletedContactType() {
    this.contact.contactType = this.selectedContactType;
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
    if (this.contact.id === 0) {
      this.contact.contactName = this.selectedContactName;
      this.reservationService.createContact(this.contact).subscribe(contact => {
        this.reservation.contactId = contact.id;
        this.reservationService.createReservation(this.reservation).subscribe(() => {
          this.router.navigate(['']);
        });
      });
    } else {
      this.reservation.contactId = this.contact.id;
      this.reservationService.createReservation(this.reservation).subscribe(() => {
        this.router.navigate(['']);
      });
    }
  }
}
