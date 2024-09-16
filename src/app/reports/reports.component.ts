import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  reports = [
    { reportName: 'Kullanıcı Sayısı', data: '100' },
    { reportName: 'Randevu Sayısı', data: '50' }
  ];

  constructor() { }

  ngOnInit(): void {
    // Backend'den raporları almak için API çağrısı yapılabilir
  }

}
