import { ReservationListComponent } from './components/reservation-list/reservation-list.component';
import { CreateReservationComponent } from './components/create-reservation/create-reservation.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";


const routes: Routes = [
  {
    path: "",
    component: ReservationListComponent
  },
  {
    path: "reservation/create",
    component: CreateReservationComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
