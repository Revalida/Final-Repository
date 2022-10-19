import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attendance.parent',
  templateUrl: './attendance.parent.component.html',
  styleUrls: ['./attendance.parent.component.scss'],
})
export class AttendanceParentComponent implements OnInit {
  studNo = '';
  datas: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.studNo = JSON.stringify(sessionStorage.getItem('STUDENT_NO') || '{}');
    this.studNo = this.studNo.replace(/"/g, '');
    console.log(this.studNo);

    this.http.get<any>('http://localhost:9191/attendance').subscribe(
      (res) => {
        const user = res.find((a: any) => {
          return a.studentNo === this.studNo;
        });
        if (user) {
          this.datas = user;
          console.log(this.datas.studentNo);
        } else {
          alert('User not found!');
          console.log(user);
        }
      },
      (err) => {
        alert('Something went wrong!');
      }
    );
  }
}
