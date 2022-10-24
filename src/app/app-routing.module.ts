import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './guards/admin.guard';
import { AdminFacultyListComponent } from './admin/admin-faculty-list/admin-faculty-list.component';
import { AdminParentListComponent } from './admin/admin-parent-list/admin-parent-list.component';
import { AdminStudentListComponent } from './admin/admin-student-list/admin-student-list.component';
import { LoginComponent } from './components/login/login.component';
import { WelcomepageComponent } from './components/welcomepage/welcomepage.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { ProfessorGuard } from './guards/professor.guard';
import { ParentGuard } from './guards/parent.guard';
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
import { UserGuard } from './guards/user.guard';
import { AdminProfileComponent } from './admin/admin-profile/admin-profile.component';
import { StudentLoadComponent } from './admin/student-load/student-load.component';
import { FacultyGradesComponent } from './components/Faculty Management module/faculty-grades/faculty-grades.component';
import { StudentActiveComponent } from './admin/student-active/student-active.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomepageComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
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
    component: AttendanceParentComponent,
    canActivate: [ParentGuard],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [UserGuard],
  },
  {
    path: 'pre-assigned',
    component: PreAssignedComponent,
    canActivate: [UserGuard],
  },
  {
    path: 'courses-list',
    component: CoursesListComponent,
    canActivate: [UserGuard],
  },
  {
    path: 'attendance',
    component: AttendanceComponent,
    canActivate: [UserGuard],
  },
  {
    path: 'grades',
    component: GradesComponent,
    canActivate: [UserGuard],
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
  {
    path: 'admin-course-list',
    component: AdminCourseListComponent,
  },
  {
    path: 'course-bsit',
    component: CourseBsitComponent,
  },
  {
    path: 'course-bscs',
    component: CourseBscsComponent,
  },
  {
    path: 'course-bsee',
    component: CourseBseeComponent,
  },
  {
    path: 'student-regular',
    component: StudentRegularComponent,
  },
  {
    path: 'student-irregular',
    component: StudentIrregularComponent,
  },
  {
    path: 'student-graduate',
    component: StudentGraduateComponent,
  },
  {
    path: 'faculty-attendance',
    component: FacultyAttendanceComponent,
  },
  {
    path: 'admin-profile',
    component: AdminProfileComponent,
  },
  {
    path: 'student-load',
    component: StudentLoadComponent,
  },
  {
    path: 'grading-system',
    component: FacultyGradesComponent,
  },
  {
    path: 'student-active',
    component: StudentActiveComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
