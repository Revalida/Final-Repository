import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentLoadBsitComponent } from './student-load-bsit.component';

describe('StudentLoadBsitComponent', () => {
  let component: StudentLoadBsitComponent;
  let fixture: ComponentFixture<StudentLoadBsitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentLoadBsitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentLoadBsitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
