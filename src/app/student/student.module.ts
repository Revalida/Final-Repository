import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentdashboardComponent } from './studentdashboard/studentdashboard.component';
import { RouterModule } from '@angular/router';
import { StudentHeaderComponent } from './studentheader/studentheader.component';

@NgModule({
  declarations: [
    StudentdashboardComponent,
    StudentHeaderComponent,
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class StudentModule { }
