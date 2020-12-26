import {CreateContactComponent} from './components/create-contact/create-contact.component';
import {ReservationListComponent} from './components/reservation-list/reservation-list.component';
import {CreateReservationComponent} from './components/create-reservation/create-reservation.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContactListComponent} from './components/contact-list/contact-list.component';
import {EditContactComponent} from './components/edit-contact/edit-contact.component';
import {EditReservationComponent} from './components/edit-reservation/edit-reservation.component';


const routes: Routes = [
  {
    path: '',
    component: ReservationListComponent
  },
  {
    path: 'reservation/create',
    component: CreateReservationComponent
  },
  {
    path: 'contact',
    component: ContactListComponent
  },
  {
    path: 'contact/edit/:id',
    component: EditContactComponent
  },
  {
    path: 'contact/create',
    component: CreateContactComponent

  },
  {
    path: 'reservation/edit/:id',
    component: EditReservationComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
