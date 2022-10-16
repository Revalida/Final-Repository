import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseBsitComponent } from './course-bsit.component';

describe('CourseBsitComponent', () => {
  let component: CourseBsitComponent;
  let fixture: ComponentFixture<CourseBsitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseBsitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseBsitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
