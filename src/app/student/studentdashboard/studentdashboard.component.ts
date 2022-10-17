import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-studentdashboard',
  templateUrl: './studentdashboard.component.html',
  styleUrls: ['./studentdashboard.component.scss'],
})
export class StudentdashboardComponent implements OnInit {
  opened = false;
  data: any;

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

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loggedUser = JSON.stringify(
      sessionStorage.getItem('loggedUser') || '{}'
    );
    this.loggedUser = this.loggedUser.replace(/"/g, '');

    this.currRole = JSON.stringify(sessionStorage.getItem('ROLE') || '{}');
    this.currRole = this.currRole.replace(/"/g, '');

    this.http.get<any>('http://localhost:9191/student').subscribe(
      (res) => {
        const user = res.find((a: any) => {
          return a.studNo === sessionStorage.getItem('STUDENT_NO');
        });
        if (user) {
          this.data = user;
          console.log(this.data);
        } else {
          console.log(res);
        }
      },
      (err) => {
        alert('Something went wrong!');
      }
    );
  }
}
