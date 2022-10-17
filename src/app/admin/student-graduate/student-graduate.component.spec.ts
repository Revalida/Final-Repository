import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentGraduateComponent } from './student-graduate.component';

describe('StudentGraduateComponent', () => {
  let component: StudentGraduateComponent;
  let fixture: ComponentFixture<StudentGraduateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentGraduateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentGraduateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
