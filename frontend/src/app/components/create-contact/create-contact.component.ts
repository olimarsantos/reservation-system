import {Contact, ContactType} from './../../modules/reservation.module';
import {Component, OnInit} from '@angular/core';
import {ReservationService} from 'src/app/services/reservation.service';
import {Router} from '@angular/router';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {

  selectedContactType: string;

  filteredContactsType: any[];

  contactsType: ContactType[];

  contactType: ContactType = {
    id: 0,
    type: ''
  };

  contact: Contact = {
    contactName: '',
    contactType: '',
    phone: '',
    birthDate: new Date()
  };

  constructor(private reservationService: ReservationService,
              private messageService: MessageService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.reservationService.getContactType().subscribe(contactType => {
      this.contactsType = contactType;
    });
  }

  filterContactType() {
    const filtered: any[] = [];
    for (let i = 0; i < this.contactsType.length; i++) {
      filtered.push(this.contactsType[i].type);
    }
    this.filteredContactsType = filtered;
  }

  afterSelectedContactType() {
    this.contact.contactType = this.selectedContactType;
  }

  saveContact() {
    this.contact.contactType = this.selectedContactType;
    this.contactType.type = this.selectedContactType;
    this.createContact();
  }

  createContact() {
    this.reservationService.getContactTypeByName(this.contact.contactType).subscribe(contactType => {
      if (contactType === null) {
        this.reservationService.createContactType(this.contactType).subscribe(() => {
          this.reservationService.createContact(this.contact).subscribe(() => {
            this.router.navigate(['/contact']);
          });
        });
      } else {
        this.reservationService.createContact(this.contact).subscribe(() => {
          this.router.navigate(['/contact']);
        });
      }
    });
  }
}
