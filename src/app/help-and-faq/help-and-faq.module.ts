import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpAndFAQComponent } from './help-and-faq/help-and-faq.component';
import { HelpAndFAQRoutingModule } from './help-and-faq-routing.module';

@NgModule({
  declarations: [
    HelpAndFAQComponent  // Bileşenin tanımlandığından emin olun
  ],
  imports: [
    CommonModule,
    HelpAndFAQRoutingModule  // Yönlendirme modülü dahil
  ]
})
export class HelpAndFAQModule { }
