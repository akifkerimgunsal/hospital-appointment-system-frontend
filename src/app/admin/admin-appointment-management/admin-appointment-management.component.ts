import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-admin-appointment-management',
  templateUrl: './admin-appointment-management.component.html',
  styleUrls: ['./admin-appointment-management.component.scss']
})
export class AdminAppointmentManagementComponent implements OnInit {
  appointments: any[] = [];

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getAppointments().subscribe(data => {
      this.appointments = data;
    });
  }

  deleteAppointment(appointmentId: number): void {
    this.adminService.deleteAppointment(appointmentId).subscribe(() => {
      this.appointments = this.appointments.filter(appointment => appointment.id !== appointmentId);
    });
  }
}
