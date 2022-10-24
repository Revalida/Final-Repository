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
import { AdminCourseListComponent } from './admin/course-list/admin-course-list/admin-course-list.component';
import { CourseBsitComponent } from './admin/course-list/course-bsit/course-bsit.component';
import { CourseBscsComponent } from './admin/course-list/course-bscs/course-bscs.component';
import { CourseBseeComponent } from './admin/course-list/course-bsee/course-bsee.component';
import { StudentRegularComponent } from './admin/student-list/student-regular/student-regular.component';
import { StudentIrregularComponent } from './admin/student-list/student-irregular/student-irregular.component';
import { StudentGraduateComponent } from './admin/student-list/student-graduate/student-graduate.component';
import { UserGuard } from './guards/user.guard';
import { AdminProfileComponent } from './admin/admin-profile/admin-profile.component';
import { StudentLoadComponent } from './admin/studentload/student-load/student-load.component';
import { FacultyGradesComponent } from './components/Faculty Management module/faculty-grades/faculty-grades.component';

import { FacultyScheduleComponent } from './components/Faculty Management module/faculty-schedule/faculty-schedule.component';

import { StudentActiveComponent } from './admin/student-list/student-active/student-active.component';
import { StudentLoadBsitComponent } from './admin/studentload/student-load-bsit/student-load-bsit.component';
import { StudentLoadBscsComponent } from './admin/studentload/student-load-bscs/student-load-bscs.component';
import { StudentLoadBseeComponent } from './admin/studentload/student-load-bsee/student-load-bsee.component';
import { ParentComponent } from './components/parental access module/parent/parent.component';

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
    component: ParentComponent,
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
    canActivate: [AdminGuard],
  },
  {
    path: 'admin-parent-list',
    component: AdminParentListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'admin-faculty-list',
    component: AdminFacultyListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'admin-course-list',
    component: AdminCourseListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'course-bsit',
    component: CourseBsitComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'course-bscs',
    component: CourseBscsComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'course-bsee',
    component: CourseBseeComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'student-regular',
    component: StudentRegularComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'student-irregular',
    component: StudentIrregularComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'student-graduate',
    component: StudentGraduateComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'faculty-attendance',
    component: FacultyAttendanceComponent,
  },
  {
    path: 'admin-profile',
    component: AdminProfileComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'student-load',
    component: StudentLoadComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'grading-system',
    component: FacultyGradesComponent,
  },
  {
    path: 'student-active',
    component: StudentActiveComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'faculty-schedule',
    component: FacultyScheduleComponent,
  },
  {
    path: 'student-load-bsit',
    component: StudentLoadBsitComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'student-load-bscs',
    component: StudentLoadBscsComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'student-load-bsee',
    component: StudentLoadBseeComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'parent-attendance',
    component: AttendanceParentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
