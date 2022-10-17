import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultySidenavComponent } from './faculty.sidenav.component';

describe('FacultySidenavComponent', () => {
  let component: FacultySidenavComponent;
  let fixture: ComponentFixture<FacultySidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultySidenavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultySidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
