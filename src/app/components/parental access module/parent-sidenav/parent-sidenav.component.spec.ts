import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentSidenavComponent } from './parent-sidenav.component';

describe('ParentSidenavComponent', () => {
  let component: ParentSidenavComponent;
  let fixture: ComponentFixture<ParentSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentSidenavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
