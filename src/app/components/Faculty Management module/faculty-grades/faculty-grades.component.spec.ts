import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyGradesComponent } from './faculty-grades.component';

describe('FacultyGradesComponent', () => {
  let component: FacultyGradesComponent;
  let fixture: ComponentFixture<FacultyGradesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyGradesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultyGradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
