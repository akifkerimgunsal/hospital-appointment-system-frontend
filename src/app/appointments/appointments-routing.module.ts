import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { AppointmentBookComponent } from './appointment-book/appointment-book.component';
import { AppointmentCancelComponent } from './appointment-cancel/appointment-cancel.component';

const routes: Routes = [
  { path: 'appointments/list', component: AppointmentListComponent },
  { path: 'appointments/book', component: AppointmentBookComponent },
  { path: 'appointments/cancel', component: AppointmentCancelComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentsRoutingModule { }