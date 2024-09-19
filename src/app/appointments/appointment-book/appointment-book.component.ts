import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppointmentService } from '../../services/appointment.service';

@Component({
  selector: 'app-appointment-book',
  templateUrl: './appointment-book.component.html',
  styleUrls: ['./appointment-book.component.scss']
})
export class AppointmentBookComponent implements OnInit {
  appointmentForm!: FormGroup;

  constructor(private fb: FormBuilder, private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.appointmentForm = this.fb.group({
      doctorName: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.appointmentForm.valid) {
      this.appointmentService.createAppointment(this.appointmentForm.value).subscribe(response => {

        console.log('Randevu başarıyla alındı!', response);
      });
    }
  }
}
