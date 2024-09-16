import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProfileComponent } from './profile/profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { UserManagementRoutingModule } from './user-management-routing.module';  // Yönlendirme modülü

@NgModule({
  declarations: [
    ProfileComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,  // Form işlemleri için
    UserManagementRoutingModule  // Yönlendirme dosyası
  ]
})
export class UserManagementModule { }
