import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminUserManagementComponent } from './admin-user-management/admin-user-management.component';
import { AdminAppointmentManagementComponent } from './admin-appointment-management/admin-appointment-management.component';

const routes: Routes = [
  { path: 'admin/users', component: AdminUserManagementComponent },
  { path: 'admin/appointments', component: AdminAppointmentManagementComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
