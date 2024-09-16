import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-appointment-management',
  templateUrl: './admin-appointment-management.component.html',
  styleUrls: ['./admin-appointment-management.component.scss']
})
export class AdminAppointmentManagementComponent implements OnInit {
  // Randevu listesini tutacak dizi
  appointments = [
    { id: 1, patientName: 'John Doe', doctorName: 'Dr. Smith', date: '2022-10-20' },
    { id: 2, patientName: 'Jane Doe', doctorName: 'Dr. Johnson', date: '2022-10-21' }
  ];

  constructor() { }

  ngOnInit(): void {
    // Burada backend'den randevuları almak için bir servis çağırabilirsiniz
  }

  // Randevu iptal etme fonksiyonu
  cancelAppointment(appointmentId: number): void {
    console.log('Randevu iptal ediliyor: ' + appointmentId);
    // Burada API çağrısı ile randevuyu iptal edebilirsiniz
  }
}