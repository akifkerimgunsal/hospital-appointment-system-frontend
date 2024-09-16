import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-cancel',
  templateUrl: './appointment-cancel.component.html',
  styleUrls: ['./appointment-cancel.component.scss']
})
export class AppointmentCancelComponent implements OnInit {

  appointments = [
    { id: 1, doctorName: 'Dr. Smith', date: '2022-10-20', time: '10:00' },
    { id: 2, doctorName: 'Dr. Johnson', date: '2022-10-21', time: '11:00' }
  ];

  constructor() { }

  ngOnInit(): void {
    // Backend'den randevular alınabilir
  }

  cancelAppointment(appointmentId: number): void {
    console.log('Randevu iptal ediliyor: ' + appointmentId);
    // API ile iptal işlemi yapılabilir
  }

}