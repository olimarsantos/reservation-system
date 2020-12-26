import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Contact, ContactType} from 'src/app/modules/reservation.module';
import {ReservationService} from 'src/app/services/reservation.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  totalRecords: number;

  loading: boolean;

  contacts: Contact[];

  contactsType: ContactType[];

  constructor(private router: Router,
              private reservationService: ReservationService) {
  }

  ngOnInit(): void {
    this.loading = true;

    this.getContacts();

    this.reservationService.getContactType().subscribe(contactType => {
      this.contactsType = contactType;
      this.loading = false;
    });
  }

  deleteContact(id: number) {
    this.reservationService.deleteContact(id).subscribe(() => {
      this.getContacts();
    });
  }

  getContacts() {
    this.reservationService.getContacts().subscribe(contacts => {
      this.contacts = contacts;
      this.loading = false;
    });
  }
}
