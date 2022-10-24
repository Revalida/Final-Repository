import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentLoadBseeComponent } from './student-load-bsee.component';

describe('StudentLoadBseeComponent', () => {
  let component: StudentLoadBseeComponent;
  let fixture: ComponentFixture<StudentLoadBseeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentLoadBseeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentLoadBseeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
