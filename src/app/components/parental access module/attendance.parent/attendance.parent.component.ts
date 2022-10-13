import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attendance.parent',
  templateUrl: './attendance.parent.component.html',
  styleUrls: ['./attendance.parent.component.scss'],
})
export class AttendanceParentComponent implements OnInit {
  role = '';
  datas: any;
  pipe = new DatePipe('en-US');
  todayWithPipe: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.role = JSON.stringify(sessionStorage.getItem('STUD_NO') || '{}');
    this.role = this.role.replace(/"/g, '');
    console.log(this.role);

    this.http.get<any>('http://localhost:9191/attendance').subscribe(
      (res) => {
        const user = res.find((a: any) => {
          return a.studNo === this.role;
        });
        if (user) {
          this.datas = user;
        } else {
          alert('User not found!');
          console.log(user);
        }
      },
      (err) => {
        alert('Something went wrong!');
      }
    );
    this.todayWithPipe = this.pipe.transform(this.datas.timestamp, 'MMMM d, y');
  }
}
