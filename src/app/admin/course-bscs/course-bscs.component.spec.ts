import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseBscsComponent } from './course-bscs.component';

describe('CourseBscsComponent', () => {
  let component: CourseBscsComponent;
  let fixture: ComponentFixture<CourseBscsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseBscsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseBscsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
