import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminUserManagementComponent } from './admin-user-management/admin-user-management.component';
import { AdminAppointmentManagementComponent } from './admin-appointment-management/admin-appointment-management.component';
import { AdminRoutingModule } from './admin-routing.module';  // Yönlendirme dosyasını dahil ediyoruz

@NgModule({
  declarations: [
    AdminUserManagementComponent,
    AdminAppointmentManagementComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule  // Yönlendirme modülü burada
  ]
})
export class AdminModule { }
