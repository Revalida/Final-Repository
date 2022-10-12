import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminGuard } from './guards/admin.guard';
import { UserGuard } from './guards/user.guard';
import { LoginComponent } from './login/login.component';
import { StudentdashboardComponent } from './student/studentdashboard/studentdashboard.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
