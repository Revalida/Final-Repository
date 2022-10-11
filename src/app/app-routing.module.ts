import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminFacultyListComponent } from './admin/admin-faculty-list/admin-faculty-list.component';
import { AdminParentListComponent } from './admin/admin-parent-list/admin-parent-list.component';
import { AdminStudentListComponent } from './admin/admin-student-list/admin-student-list.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { LoginComponent } from './login/login.component';
import { StudentdashboardComponent } from './student/studentdashboard/studentdashboard.component';

const routes: Routes = [
  {
    path: '',
    component: StudentdashboardComponent,
  },
  // {
  //   path: '',
  //   component: WelcomepageComponent,
  // },
  { path: 'login', component: LoginComponent },
  {
    path: 'admindashboard',
    component: AdmindashboardComponent,
    //canActivate: [AdminGuard],
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
