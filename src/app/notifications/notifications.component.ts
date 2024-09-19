import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  notificationForm!: FormGroup;

  constructor(private fb: FormBuilder, private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.notificationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      sendType: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.notificationForm.valid) {
      this.notificationService.sendNotification(this.notificationForm.value).subscribe(response => {
        console.log('Bildirim gönderildi!', response);
      });
    }
  }
}
