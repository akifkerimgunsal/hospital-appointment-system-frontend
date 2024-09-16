import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-appointment',
  templateUrl: './doctor-appointment.component.html',
  styleUrls: ['./doctor-appointment.component.scss']
})
export class DoctorAppointmentComponent implements OnInit {

  appointments = [
    { patientName: 'John Doe', date: '2022-10-20', time: '10:00' },
    { patientName: 'Jane Doe', date: '2022-10-21', time: '11:00' }
  ];

  constructor() { }

  ngOnInit(): void {
    // Backend'den randevuları almak için API çağrısı yapılabilir
  }

}
