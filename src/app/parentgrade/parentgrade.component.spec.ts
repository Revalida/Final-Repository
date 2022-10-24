import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentgradeComponent } from './parentgrade.component';

describe('ParentgradeComponent', () => {
  let component: ParentgradeComponent;
  let fixture: ComponentFixture<ParentgradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentgradeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentgradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
