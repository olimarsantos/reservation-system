import {Component, OnInit} from '@angular/core';
import {Contact, ContactType, ReservationList} from '../../modules/reservation.module';
import {ReservationService} from '../../services/reservation.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HeaderService} from '../../services/header.service';

@Component({
  selector: 'app-edit-reservation',
  templateUrl: './edit-reservation.component.html',
  styleUrls: ['./edit-reservation.component.css']
})
export class EditReservationComponent implements OnInit {

  birthDate: Date;

  selectedContactType: string;

  contactsType: ContactType[];

  filteredContactsType: any[];

  reservation: ReservationList = {
    id: 0,
    description: '',
    favorite: false,
    name: '',
    rating: 5,
    contactId: 0,
    text: ''
  };

  contact: Contact = {
    contactName: '',
    contactType: '',
    phone: '',
    birthDate: new Date()
  };

  contactType: ContactType = {
    id: 0,
    type: ''
  };

  constructor(private reservationService: ReservationService,
              private headerService: HeaderService,
              private route: ActivatedRoute,
              private router: Router) {
    headerService.headerData = {
      title: 'RESERVATION LIST',
      routeUrl: ''
    };
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.reservationService.getReservationById(id).subscribe(reservation => {
      this.reservation = reservation;
      this.reservationService.getContactById(this.reservation.contactId).subscribe(contact => {
        this.contact = contact;
        this.birthDate = new Date(this.contact.birthDate);
        this.selectedContactType = contact.contactType;
      });
    });

    this.reservationService.getContactType().subscribe(contactType => {
      this.contactsType = contactType;
    });
  }

  saveReservation() {
    this.contact.contactType = this.selectedContactType;
    this.contactType.type = this.selectedContactType;
    this.validateContactType();
    this.reservationService.updateReservation(this.reservation).subscribe(() => {
      this.contact.birthDate = this.birthDate;
      this.reservationService.updateContact(this.contact).subscribe(() => {
        this.router.navigate(['']);
      });
    });
  }

  private validateContactType() {
    this.reservationService.getContactTypeByName(this.contact.contactType).subscribe(contactType => {
      if (contactType === null) {
        this.reservationService.createContactType(this.contactType).subscribe(newContactType => {
          this.contact.contactType = newContactType.type;

        });
      }
    });
  }

  filterContactType() {
    const filtered: any[] = [];
    for (let i = 0; i < this.contactsType.length; i++) {
      filtered.push(this.contactsType[i].type);
    }
    this.filteredContactsType = filtered;
  }

  afterSeletedContactType() {
    this.contact.contactType = this.selectedContactType;
  }
}
