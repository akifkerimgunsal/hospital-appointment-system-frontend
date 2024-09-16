import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { AppointmentsModule } from './appointments/appointments.module';
import { DoctorModule } from './doctor/doctor.module';
import { NotificationsModule } from './notifications/notifications.module';
import { ReportsModule } from './reports/reports.module';
import { PastAppointmentsModule } from './past-appointments/past-appointments.module';
import { HelpAndFAQModule } from './help-and-faq/help-and-faq.module';
import { FeedbackModule } from './feedback/feedback.module';
import { routes } from './app.routes';  // Ana yönlendirme rotaları

@NgModule({
  declarations: [
    AppComponent  // Sadece ana bileşen burada yer almalı
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),  // Ana yönlendirme rotaları
    AuthModule,
    AdminModule,
    AppointmentsModule,
    DoctorModule,
    NotificationsModule,
    ReportsModule,
    PastAppointmentsModule,
    HelpAndFAQModule,
    FeedbackModule  // Feedback modülü burada tanımlanmalı
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
