import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Contact, ContactType} from 'src/app/modules/reservation.module';
import {ReservationService} from 'src/app/services/reservation.service';
import {HeaderService} from '../../services/header.service';
import {ConfirmationService} from 'primeng/api';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
  providers: [ConfirmationService],
})
export class ContactListComponent implements OnInit {

  totalRecords: number;

  loading: boolean;

  contactIdToDelete: number;

  contacts: Contact[];

  contactsType: ContactType[];

  visibleSidebar;

  constructor(private router: Router,
              private headerService: HeaderService,
              private reservationService: ReservationService) {
    headerService.headerData = {
      title: 'RESERVATION LIST',
      routeUrl: ''
    };
  }

  ngOnInit(): void {
    this.loading = true;

    this.getContacts();

    this.reservationService.getContactType().subscribe(contactType => {
      this.contactsType = contactType;
      this.loading = false;
    });
  }

  confirm(id: number) {
    this.contactIdToDelete = id;
    this.visibleSidebar = true;
  }

  deleteContact() {
    this.reservationService.deleteContact(this.contactIdToDelete).subscribe(() => {
      this.getContacts();
    });
    this.visibleSidebar = false;
  }

  getContacts() {
    this.reservationService.getContacts().subscribe(contacts => {
      this.contacts = contacts;
      this.loading = false;
    });
  }
}
