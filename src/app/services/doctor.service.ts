import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private apiUrl = 'http://localhost:5089/api/doctors';  // Backend API URL

  constructor(private http: HttpClient) { }

  // Doktorun çalışma takvimini getirir
  getDoctorSchedule(doctorId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/schedule/${doctorId}`);
  }

  // Doktorun mevcut randevularını getirir
  getDoctorAppointments(doctorId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/appointments/${doctorId}`);
  }
}
