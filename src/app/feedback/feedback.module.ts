import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FeedbackComponent } from './feedback/feedback.component';  
import { FeedbackRoutingModule } from './feedback-routing.module';

@NgModule({
  declarations: [
    FeedbackComponent  
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FeedbackRoutingModule  // Routing modülü
  ]
})
export class FeedbackModule { }
