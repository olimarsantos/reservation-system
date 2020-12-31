import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Contact, ContactType} from 'src/app/modules/reservation.module';
import {ReservationService} from 'src/app/services/reservation.service';
import {HeaderService} from '../../services/header.service';
import {ConfirmationService, MessageService} from 'primeng/api';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
  providers: [ConfirmationService, MessageService],
})

export class ContactListComponent implements OnInit {

  totalRecords: number;

  loading: boolean;

  contactIdToDelete: number;

  contacts: Contact[];

  contactsType: ContactType[];

  constructor(private router: Router,
              private headerService: HeaderService,
              private reservationService: ReservationService,
              private messageService: MessageService,
              private confirmationService: ConfirmationService) {
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
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this contact?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.deleteContact();
      },
      reject: () => {
        this.messageService.add({severity: 'info', summary: 'Rejected', detail: 'You have rejected'});
      }
    });
  }

  deleteContact() {
    this.reservationService.deleteContact(this.contactIdToDelete).subscribe(contact => {
      if (contact.id != null) {
        this.messageService.add({severity: 'success', summary: 'Success', detail: 'Successfully deleted'});
        this.getContacts();
      } else {
        this.showWarn();
      }
    });
  }

  getContacts() {
    this.reservationService.getContacts().subscribe(contacts => {
      this.contacts = contacts;
      this.loading = false;
    });
  }

  showWarn() {
    this.messageService.add({
      severity: 'warn', summary: 'Warn',
      detail: 'Operation aborted! This contact is linked to a reservation'
    });
  }

}
