import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private apiUrl = 'http://localhost:5089/api/appointments';  // Backend API URL

  constructor(private http: HttpClient) { }

  // Tüm randevuları getirir
  getAppointments(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Yeni randevu oluşturur
  createAppointment(appointmentData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, appointmentData);
  }

  // Randevuyu iptal eder
  cancelAppointment(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
