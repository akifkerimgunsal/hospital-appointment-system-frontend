import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DoctorScheduleComponent } from './doctor-schedule/doctor-schedule.component';
import { DoctorAppointmentComponent } from './doctor-appointment/doctor-appointment.component';
import { DoctorRoutingModule } from './doctor-routing.module';

@NgModule({
  declarations: [
    DoctorScheduleComponent,
    DoctorAppointmentComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DoctorRoutingModule
  ]
})
export class DoctorModule { }