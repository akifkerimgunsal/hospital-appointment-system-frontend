import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help-and-faq',
  templateUrl: './help-and-faq.component.html',
  styleUrls: ['./help-and-faq.component.scss']
})
export class HelpAndFAQComponent implements OnInit {

  faqs = [
    { question: 'Randevumu nasıl alabilirim?', answer: 'Randevu almak için Randevu Al sayfasına gidin.' },
    { question: 'Şifremi unuttum, ne yapmalıyım?', answer: 'Şifremi Unuttum sayfasından şifrenizi sıfırlayabilirsiniz.' }
  ];

  constructor() { }

  ngOnInit(): void {
    // Yardım ve SSS verileri backend'den alınabilir
  }

}
