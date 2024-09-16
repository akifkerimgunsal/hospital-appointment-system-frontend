import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-user-management',
  templateUrl: './admin-user-management.component.html',
  styleUrls: ['./admin-user-management.component.scss']
})
export class AdminUserManagementComponent implements OnInit {
  // Kullanıcı listesini tutacak dizi
  users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com', role: 'Doctor' }
  ];

  constructor() { }

  ngOnInit(): void {
    // Burada backend'den kullanıcıları almak için bir servis çağırabilirsiniz
  }

  // Kullanıcı düzenleme fonksiyonu
  editUser(user: any): void {
    console.log('Kullanıcı düzenleniyor: ' + user.name);
    // Burada kullanıcı düzenleme işlemleri yapılabilir
  }

  // Kullanıcı silme fonksiyonu
  deleteUser(userId: number): void {
    console.log('Kullanıcı siliniyor: ' + userId);
    // Burada kullanıcı silme işlemi yapılabilir
  }
}