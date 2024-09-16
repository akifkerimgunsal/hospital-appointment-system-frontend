import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpAndFAQComponent } from './help-and-faq/help-and-faq.component';

const routes: Routes = [
  { path: 'help-faq', component: HelpAndFAQComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpAndFAQRoutingModule { }
