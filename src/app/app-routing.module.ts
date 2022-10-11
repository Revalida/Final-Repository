import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { LoginComponent } from './login/login.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentdashboardComponent } from './student/studentdashboard/studentdashboard.component';

const routes: Routes = [
  {
    path: '',
    component: StudentdashboardComponent
  },
  // {
  //   path: '',
  //   component: WelcomepageComponent,
  // },
  { path: 'login', component: LoginComponent },
  {
    path: 'admindashboard',
    component: AdmindashboardComponent,
  },
  {
    path: 'student-list',
    component: StudentListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
