import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private apiUrl = 'http://localhost:5089/api/notifications';  // Backend API URL

  constructor(private http: HttpClient) { }

  // Bildirim gönderir
  sendNotification(notificationData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, notificationData);
  }
}
