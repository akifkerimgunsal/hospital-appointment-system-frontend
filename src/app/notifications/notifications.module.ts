import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NotificationsComponent } from './notifications.component';
import { NotificationsRoutingModule } from './notifications-routing.module';  // Yönlendirme modülü

@NgModule({
  declarations: [
    NotificationsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NotificationsRoutingModule  // Routing modülü burada ekleniyor
  ]
})
export class NotificationsModule { }
