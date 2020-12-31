import {ContactType, listOfDescription, listOfName, listOfNum, ReservationList} from './../../modules/reservation.module';
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

  contactType: ContactType = {
    id: 0,
    type: ''
  };

  reservation: ReservationList = {
    rating: 5,
    name: listOfName[listOfNum[this.randomInteger(0, 5)]],
    description: listOfDescription[listOfNum[this.randomInteger(0, 5)]],
    favorite: false,
    contactId: 0,
    text: ''
  };

  filterContact(event) {
    const filtered: any[] = [];
    const query = event.query;
    for (let i = 0; i < this.reservations.length; i++) {
      const country = this.reservations[i];
      if (country.contactName.toLowerCase().indexOf(query.toLowerCase()) === 0) {
        this.selectedContact = this.reservations[i];
        filtered.push(country.contactName);
      }
    }
    this.filteredContacts = filtered;
  }

  filterContactType() {
    const filtered: any[] = [];
    for (let i = 0; i < this.contactsType.length; i++) {
      filtered.push(this.contactsType[i].type);
    }
    this.filteredContactsType = filtered;
  }

  afterSelectedContact() {
    this.contact = this.selectedContact;
    this.birthDate = new Date(this.selectedContact.birthDate);
    this.selectedContactType = this.contact.contactType;
  }

  afterSelectedContactType() {
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

  saveReservation() {
    if (this.contact.id === 0) {
      this.createContact();
    } else {
      this.createReservation();
    }
  }

  createContact() {
    this.contact.contactName = this.selectedContactName;
    this.contact.contactType = this.selectedContactType;
    this.reservationService.getContactTypeByName(this.contact.contactType).subscribe(contactType => {
      if (contactType === null) {
        this.contactType.type = this.contact.contactType;
        this.reservationService.createContactType(this.contactType).subscribe(() => {
          this.reservationService.createContact(this.contact).subscribe(contact => {
            this.contact.id = contact.id;
            this.createReservation();
          });
        });
      } else {
        this.reservationService.createContact(this.contact).subscribe(contact => {
          this.contact.id = contact.id;
          this.createReservation();
        });
      }
    });
  }

  createReservation() {
    this.reservation.contactId = this.contact.id;
    this.reservationService.createReservation(this.reservation).subscribe(() => {
      this.router.navigate(['']);
    });
  }

  randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
