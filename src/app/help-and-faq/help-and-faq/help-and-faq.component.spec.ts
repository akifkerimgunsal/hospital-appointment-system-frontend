import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpAndFaqComponent } from './help-and-faq.component';

describe('HelpAndFaqComponent', () => {
  let component: HelpAndFaqComponent;
  let fixture: ComponentFixture<HelpAndFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpAndFaqComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpAndFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
