import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacultyComponent } from './faculty/faculty.component';
import { AdminGuard } from './guards/admin.guard';
import { AdminFacultyListComponent } from './admin/admin-faculty-list/admin-faculty-list.component';
import { AdminParentListComponent } from './admin/admin-parent-list/admin-parent-list.component';
import { AdminStudentListComponent } from './admin/admin-student-list/admin-student-list.component';
import { LoginComponent } from './login/login.component';
import { ParentComponent } from './parent/parent.component';
import { StudentdashboardComponent } from './student/studentdashboard/studentdashboard.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { ProfileComponent } from './student/profile/profile.component';
import { PreAssignedComponent } from './student/pre-assigned/pre-assigned.component';
import { CoursesListComponent } from './student/courses-list/courses-list.component';
import { AttendanceComponent } from './student/attendance/attendance.component';
import { GradesComponent } from './student/grades/grades.component';
// import { UserGuard } from './guards/user.guard';

const routes: Routes = [
  {
    path: '',

    component: WelcomepageComponent,
  },
  { 
    path: 'login', 
    component: LoginComponent 
  },
  {
    path: 'studentdashboard',
    component: StudentdashboardComponent,
    // canActivate: [UserGuard],
  },
  {
    path: 'admindashboard',
    component: AdmindashboardComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'facultydashboard',
    component: FacultyComponent,
  },
  {
    path: 'parentdashboard',
    component: ParentComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'pre-assigned',
    component: PreAssignedComponent,
  },
  {
    path: 'courses-list',
    component: CoursesListComponent,
  },
  {
    path: 'attendance',
    component: AttendanceComponent,
  },
  {
    path: 'grades',
    component: GradesComponent,
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
