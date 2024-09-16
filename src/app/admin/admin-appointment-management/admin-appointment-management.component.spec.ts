import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAppointmentManagementComponent } from './admin-appointment-management.component';

describe('AdminAppointmentManagementComponent', () => {
  let component: AdminAppointmentManagementComponent;
  let fixture: ComponentFixture<AdminAppointmentManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAppointmentManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAppointmentManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
