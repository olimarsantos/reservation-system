import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reservation } from 'src/app/modules/reservation.module';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  totalRecords: number;

  loading: boolean;

  contacts: Reservation[];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
