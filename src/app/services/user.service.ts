import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:5089/api/users';  // Backend API URL

  constructor(private http: HttpClient) { }

  // Tüm kullanıcıları getirir
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Kullanıcıyı ID ile getirir
  getUserById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Profil güncellemesi
  updateProfile(profileData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/update-profile`, profileData);
  }

  // Şifre değişikliği
  changePassword(passwordData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/change-password`, passwordData);
  }
}
