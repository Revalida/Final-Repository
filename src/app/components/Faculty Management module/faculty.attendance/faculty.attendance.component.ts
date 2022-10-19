import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faculty.attendance',
  templateUrl: './faculty.attendance.component.html',
  styleUrls: ['./faculty.attendance.component.scss'],
})
export class FacultyAttendanceComponent implements OnInit {
  students: any;
  studAtt: any;
  status = '';
  canClick = false;
  cantClick = false;
  comp: any;
  opened = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    let response = this.http.get('http://localhost:9191/student');
    response.subscribe((data) => (this.students = data));
    console.log(this.students);
  }

  present(data: any) {
    this.studAtt = data;
    this.studAtt.status = 'Present';
    console.log(this.studAtt);
    this.canClick = true;
    this.cantClick = false;
    console.log(this.studAtt);
    this.http
      .post('http://localhost:9191/attendance/addattendance', this.studAtt)
      .subscribe((result) => {
        console.log(result);
      });
  }

  absent(data: any) {
    this.studAtt = data;
    this.studAtt.status = 'Absent';
    this.ngOnInit;
    console.log(this.studAtt);
    this.canClick = false;
    this.cantClick = true;
    this.http
      .post('http://localhost:9191/attendance/addattendance', this.studAtt)
      .subscribe((result) => {
        console.log(result);
      });
  }
}
