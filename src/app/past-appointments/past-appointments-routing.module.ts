import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PastAppointmentsComponent } from './past-appointments/past-appointments.component';

const routes: Routes = [
  { path: 'past-appointments', component: PastAppointmentsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PastAppointmentsRoutingModule { }
