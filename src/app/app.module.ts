import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './components/login/login.component';
import { WelcomepageComponent } from './components/welcomepage/welcomepage.component';
import { RouterModule } from '@angular/router';
import { ParentComponent } from './components/parental access module/parent/parent.component';
import { AdminStudentListComponent } from './admin/admin-student-list/admin-student-list.component';
import { AdminParentListComponent } from './admin/admin-parent-list/admin-parent-list.component';
import { AdminFacultyListComponent } from './admin/admin-faculty-list/admin-faculty-list.component';
import { AdminSidenavComponent } from './admin/admin-sidenav/admin-sidenav.component';
import { ProfileComponent } from './student/profile/profile.component';
import { PreAssignedComponent } from './student/pre-assigned/pre-assigned.component';
import { CoursesListComponent } from './student/courses-list/courses-list.component';
import { AttendanceComponent } from './student/attendance/attendance.component';
import { GradesComponent } from './student/grades/grades.component';
import { FacultyComponent } from './components/Faculty Management module/faculty/faculty.component';
import { AttendanceParentComponent } from './components/parental access module/attendance.parent/attendance.parent.component';
import { FacultyAttendanceComponent } from './components/Faculty Management module/faculty.attendance/faculty.attendance.component';
import { AdminCourseListComponent } from './admin/admin-course-list/admin-course-list.component';
import { CourseBsitComponent } from './admin/course-bsit/course-bsit.component';
import { CourseBscsComponent } from './admin/course-bscs/course-bscs.component';
import { CourseBseeComponent } from './admin/course-bsee/course-bsee.component';
import { StudentRegularComponent } from './admin/student-regular/student-regular.component';
import { StudentIrregularComponent } from './admin/student-irregular/student-irregular.component';
import { StudentGraduateComponent } from './admin/student-graduate/student-graduate.component';
import { FacultySidenavComponent } from './components/Faculty Management module/faculty.sidenav/faculty-sidenav.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminProfileComponent } from './admin/admin-profile/admin-profile.component';
import { StudentLoadComponent } from './admin/student-load/student-load.component';

import { FacultyGradesComponent } from './components/Faculty Management module/faculty-grades/faculty-grades.component';

import { StudentSidenavComponent } from './student/student-sidenav/student-sidenav.component';


@NgModule({
  declarations: [
    AppComponent,
    AdmindashboardComponent,
    HeaderComponent,
    AdminStudentListComponent,
    AdminParentListComponent,
    AdminFacultyListComponent,
    AdminSidenavComponent,
    LoginComponent,
    WelcomepageComponent,
    FacultyComponent,
    ParentComponent,
    ProfileComponent,
    PreAssignedComponent,
    CoursesListComponent,
    AttendanceComponent,
    GradesComponent,
    AttendanceParentComponent,
    FacultyAttendanceComponent,
    AdminCourseListComponent,
    CourseBsitComponent,
    CourseBsitComponent,
    CourseBscsComponent,
    CourseBscsComponent,
    CourseBseeComponent,
    CourseBseeComponent,
    StudentRegularComponent,
    StudentIrregularComponent,
    StudentGraduateComponent,
    FacultySidenavComponent,
    AdminProfileComponent,
    StudentLoadComponent,
    FacultyGradesComponent,
    StudentSidenavComponent,

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
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  exports: [HeaderComponent],
  providers: [FormBuilder],
  bootstrap: [AppComponent],
})
export class AppModule {}
