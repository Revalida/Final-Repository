import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentLoadComponent } from './student-load.component';

describe('StudentLoadComponent', () => {
  let component: StudentLoadComponent;
  let fixture: ComponentFixture<StudentLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentLoadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
