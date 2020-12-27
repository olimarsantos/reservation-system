import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Contact, ContactType} from 'src/app/modules/reservation.module';
import {ReservationService} from 'src/app/services/reservation.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  contactsType: ContactType[];

  filteredContactsType: any[];

  selectedContactType: string;

  birthDate: Date;

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
              private router: Router,
              private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.reservationService.getContactById(id).subscribe(contact => {
      this.contact = contact;
      this.birthDate = new Date(this.contact.birthDate);
      this.selectedContactType = contact.contactType;
    });

    this.reservationService.getContactType().subscribe(contactType => {
      this.contactsType = contactType;
    });
  }

  filterContactType() {
    let filtered: any[] = [];
    for (let i = 0; i < this.contactsType.length; i++) {
      filtered.push(this.contactsType[i].type);
    }
    this.filteredContactsType = filtered;
  }

  afterSeletedContactType() {
    this.contact.contactType = this.selectedContactType;
  }

  saveContact() {
    this.contact.birthDate = this.birthDate;
    this.contact.contactType = this.selectedContactType;
    this.contactType.type = this.selectedContactType;
    this.validateContactType();
    this.reservationService.updateContact(this.contact).subscribe(() => {
      this.router.navigate(['/contact']);
    });
  }

  private validateContactType() {
    this.reservationService.getContactTypeByName(this.contact.contactType).subscribe(contactType => {
      if (typeof contactType[0] === 'undefined') {
        this.reservationService.createContactType(this.contactType).subscribe(() => {
        });
      }
    });
  }
}
