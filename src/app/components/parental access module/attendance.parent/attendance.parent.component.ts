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

    this.http.get('http://localhost:9191/attendance/' + this.studNo).subscribe(
      (res) => {
        this.datas = res;
        console.log(this.datas);
      },
      (err) => {
        alert('Something went wrong!');
      }
    );
  }
}
