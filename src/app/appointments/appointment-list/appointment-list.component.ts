import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss']
})
export class AppointmentListComponent implements OnInit {

  // Kullanıcının randevularını tutacak dizi
  appointments = [
    { id: 1, doctorName: 'Dr. Smith', date: '2022-10-20', time: '10:00' },
    { id: 2, doctorName: 'Dr. Johnson', date: '2022-10-21', time: '11:00' }
  ];

  constructor() { }

  ngOnInit(): void {
    // Backend'den randevuları almak için API çağrısı yapılabilir
  }

}