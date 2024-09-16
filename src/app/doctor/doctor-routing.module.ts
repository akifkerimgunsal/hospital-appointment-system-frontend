import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorScheduleComponent } from './doctor-schedule/doctor-schedule.component';
import { DoctorAppointmentComponent } from './doctor-appointment/doctor-appointment.component';

const routes: Routes = [
  { path: 'doctor/schedule', component: DoctorScheduleComponent },
  { path: 'doctor/appointments', component: DoctorAppointmentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }