import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreAssignedComponent } from './pre-assigned.component';

describe('PreAssignedComponent', () => {
  let component: PreAssignedComponent;
  let fixture: ComponentFixture<PreAssignedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreAssignedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreAssignedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
