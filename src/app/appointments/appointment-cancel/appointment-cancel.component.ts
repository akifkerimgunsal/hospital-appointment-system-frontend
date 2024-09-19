import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../../services/appointment.service';

@Component({
  selector: 'app-appointment-cancel',
  templateUrl: './appointment-cancel.component.html',
  styleUrls: ['./appointment-cancel.component.scss']
})
export class AppointmentCancelComponent implements OnInit {
  appointments: any[] = [];

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.appointmentService.getAppointments().subscribe(data => {
      this.appointments = data;
    });
  }

  cancelAppointment(id: number): void {
    this.appointmentService.cancelAppointment(id).subscribe(() => {
      this.appointments = this.appointments.filter(appointment => appointment.id !== id);
    });
  }
}
