import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { RouterModule } from '@angular/router';
import { StudentdashboardComponent } from './student/studentdashboard/studentdashboard.component';
import { StudentHeaderComponent } from './student/studentheader/studentheader.component';

import { FacultyComponent } from './faculty/faculty.component';
import { ParentComponent } from './parent/parent.component';

import { AdminStudentListComponent } from './admin/admin-student-list/admin-student-list.component';
import { AdminParentListComponent } from './admin/admin-parent-list/admin-parent-list.component';
import { AdminFacultyListComponent } from './admin/admin-faculty-list/admin-faculty-list.component';
import { AdminSidenavComponent } from './admin/admin-sidenav/admin-sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    AdmindashboardComponent,
    HeaderComponent,
    AdminStudentListComponent,
    AdminParentListComponent,
    AdminFacultyListComponent,
    AdminSidenavComponent,
    StudentHeaderComponent,
    StudentdashboardComponent,
    LoginComponent,
    WelcomepageComponent,
    FacultyComponent,
    ParentComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
  exports: [HeaderComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
