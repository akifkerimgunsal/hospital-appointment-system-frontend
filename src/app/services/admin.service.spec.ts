import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'http://localhost:5000/api/admin';  // Backend API URL

  constructor(private http: HttpClient) { }

  // Tüm kullanıcıları getirir
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/users`);
  }

  // Kullanıcıyı siler
  deleteUser(userId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/users/${userId}`);
  }

  // Tüm randevuları getirir
  getAppointments(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/appointments`);
  }

  // Randevuyu siler
  deleteAppointment(appointmentId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/appointments/${appointmentId}`);
  }
}
