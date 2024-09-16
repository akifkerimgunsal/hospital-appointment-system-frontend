import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; 

import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { AppointmentBookComponent } from './appointment-book/appointment-book.component';
import { AppointmentCancelComponent } from './appointment-cancel/appointment-cancel.component';
import { AppointmentsRoutingModule } from './appointments-routing.module';

@NgModule({
  declarations: [
    AppointmentListComponent,
    AppointmentBookComponent,
    AppointmentCancelComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppointmentsRoutingModule  
  ]
})
export class AppointmentsModule { }