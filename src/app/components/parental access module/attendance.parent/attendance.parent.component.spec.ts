import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceParentComponent } from './attendance.parent.component';

describe('AttendanceParentComponent', () => {
  let component: AttendanceParentComponent;
  let fixture: ComponentFixture<AttendanceParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendanceParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendanceParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
