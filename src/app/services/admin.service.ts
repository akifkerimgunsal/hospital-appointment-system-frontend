import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'http://localhost:5089/api/admin';  // Backend API URL

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/users`);  // Tüm kullanıcıları getirir
  }

  deleteUser(userId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/users/${userId}`);  // Kullanıcıyı siler
  }

  getAppointments(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/appointments`);  // Tüm randevuları getirir
  }

  deleteAppointment(appointmentId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/appointments/${appointmentId}`);  // Randevuyu siler
  }
}
