import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-past-appointments',
  templateUrl: './past-appointments.component.html',
  styleUrls: ['./past-appointments.component.scss']
})
export class PastAppointmentsComponent implements OnInit {
  pastAppointments = [
    { doctor: 'Dr. Smith', date: '2022-05-10', time: '10:00', status: 'Tamamlandı' },
    { doctor: 'Dr. Johnson', date: '2022-05-15', time: '14:00', status: 'İptal Edildi' }
  ];

  constructor() { }

  ngOnInit(): void {
    // Geçmiş randevular backend'den alınabilir
  }
}
