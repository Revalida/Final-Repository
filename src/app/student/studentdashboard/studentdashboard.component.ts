import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-studentdashboard',
  templateUrl: './studentdashboard.component.html',
  styleUrls: ['./studentdashboard.component.scss'],
})
export class StudentdashboardComponent implements OnInit {
  opened = false;

  toogleSidebar() {
    this.opened = !this.opened;
  } 

  loggedUser = '';
  currRole = '';
  courses: Observable<any[]> | undefined;
  enrollments: Observable<any[]> | undefined;
  enrollmentcount: Observable<any[]> | undefined;
  wishlist: Observable<any[]> | undefined;
  chapters: Observable<any[]> | undefined;

  constructor() {}

  ngOnInit(): void {
    this.loggedUser = JSON.stringify(
      sessionStorage.getItem('loggedUser') || '{}'
    );
    this.loggedUser = this.loggedUser.replace(/"/g, '');

    this.currRole = JSON.stringify(sessionStorage.getItem('ROLE') || '{}');
    this.currRole = this.currRole.replace(/"/g, '');
  }
  
}
