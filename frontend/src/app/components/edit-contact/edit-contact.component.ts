import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact, ContactType } from 'src/app/modules/reservation.module';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  // contact: Contact;

  contactsType: ContactType[];

  filteredContactsType: any[];

  selectedContactType: string;

  birthDate: Date;

  contact: Contact = {
    contactName: '',
    contactType: '',
    phone: '',
    birthDate: new Date(),
    text: ''
  };

  constructor(private reservationService: ReservationService,              
              private route: ActivatedRoute) { }

  ngOnInit(): void {    
    const id = + this.route.snapshot.paramMap.get('id');
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

}
