import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminParentListComponent } from './admin-parent-list.component';

describe('AdminParentListComponent', () => {
  let component: AdminParentListComponent;
  let fixture: ComponentFixture<AdminParentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminParentListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminParentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
