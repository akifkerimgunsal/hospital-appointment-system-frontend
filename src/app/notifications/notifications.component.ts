import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  notificationForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.notificationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      sendType: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.notificationForm.valid) {
      const formData = this.notificationForm.value;
      console.log('Bildirim Formu Verileri:', formData);
      // API'ye gönderme işlemi burada yapılır
    }
  }
}
