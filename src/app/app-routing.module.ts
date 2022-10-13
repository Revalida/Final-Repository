import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FacultyComponent } from './faculty/faculty.component';
import { AdminGuard } from './guards/admin.guard';
import { UserGuard } from './guards/user.guard';
import { AdminFacultyListComponent } from './admin/admin-faculty-list/admin-faculty-list.component';
import { AdminParentListComponent } from './admin/admin-parent-list/admin-parent-list.component';
import { AdminStudentListComponent } from './admin/admin-student-list/admin-student-list.component';
import { LoginComponent } from './login/login.component';
import { ParentComponent } from './parent/parent.component';
import { StudentdashboardComponent } from './student/studentdashboard/studentdashboard.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { ProfessorGuard } from './guards/professor.guard';
import { ParentGuard } from './guards/parent.guard';

const routes: Routes = [
  {
    path: 'studentdashboard',
    component: StudentdashboardComponent,
    canActivate: [UserGuard],
  },
  {
    path: '',

    component: WelcomepageComponent,
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'admindashboard',
    component: AdmindashboardComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'facultydashboard',
    component: FacultyComponent,
    canActivate: [ProfessorGuard],
  },
  {
    path: 'parentdashboard',
    component: ParentComponent,
    canActivate: [ParentGuard],
  },
  {
    path: 'admin-student-list',
    component: AdminStudentListComponent,
  },
  {
    path: 'admin-parent-list',
    component: AdminParentListComponent,
  },
  {
    path: 'admin-faculty-list',
    component: AdminFacultyListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
