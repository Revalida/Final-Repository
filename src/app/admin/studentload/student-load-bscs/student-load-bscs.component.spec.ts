import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentLoadBscsComponent } from './student-load-bscs.component';

describe('StudentLoadBscsComponent', () => {
  let component: StudentLoadBscsComponent;
  let fixture: ComponentFixture<StudentLoadBscsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentLoadBscsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentLoadBscsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
