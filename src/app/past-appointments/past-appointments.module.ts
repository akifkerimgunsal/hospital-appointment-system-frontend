import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PastAppointmentsComponent } from './past-appointments/past-appointments.component';
import { PastAppointmentsRoutingModule } from './past-appointments-routing.module';

@NgModule({
  declarations: [
    PastAppointmentsComponent
  ],
  imports: [
    CommonModule,
    PastAppointmentsRoutingModule  // Routing modülü
  ]
})
export class PastAppointmentsModule { }
