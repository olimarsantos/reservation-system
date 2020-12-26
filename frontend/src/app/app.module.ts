import {ReservationService} from './services/reservation.service';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {TableModule} from 'primeng/table';
import {CalendarModule} from 'primeng/calendar';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {RatingModule} from 'primeng/rating';
import {EditorModule} from 'primeng/editor';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {ToolbarModule} from 'primeng/toolbar';
import {ReservationListComponent} from './components/reservation-list/reservation-list.component';
import {CreateReservationComponent} from './components/create-reservation/create-reservation.component';
import {AppRoutingModule} from './app-routing.module';
import {ContactListComponent} from './components/contact-list/contact-list.component';
import {EditContactComponent} from './components/edit-contact/edit-contact.component';
import {CreateContactComponent} from './components/create-contact/create-contact.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    CalendarModule,
    ButtonModule,
    InputTextModule,
    HttpClientModule,
    FormsModule,
    RatingModule,
    EditorModule,
    AppRoutingModule,
    AutoCompleteModule,
    ToolbarModule
  ],
  declarations: [AppComponent, ReservationListComponent, CreateReservationComponent, ContactListComponent, EditContactComponent, CreateContactComponent],
  bootstrap: [AppComponent],
  providers: [ReservationService],
})

export class AppModule {
}
