import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRegularComponent } from './student-regular.component';

describe('StudentRegularComponent', () => {
  let component: StudentRegularComponent;
  let fixture: ComponentFixture<StudentRegularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentRegularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentRegularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
