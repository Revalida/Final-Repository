import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentIrregularComponent } from './student-irregular.component';

describe('StudentIrregularComponent', () => {
  let component: StudentIrregularComponent;
  let fixture: ComponentFixture<StudentIrregularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentIrregularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentIrregularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
