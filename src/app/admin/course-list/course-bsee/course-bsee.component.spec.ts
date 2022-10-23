import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseBseeComponent } from './course-bsee.component';

describe('CourseBseeComponent', () => {
  let component: CourseBseeComponent;
  let fixture: ComponentFixture<CourseBseeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseBseeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseBseeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
