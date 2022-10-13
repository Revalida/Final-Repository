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

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    let response = this.http.get('http://localhost:9191/student');
    response.subscribe((data) => (this.students = data));
  }

  present(data: any) {
    this.studAtt = data;
    this.studAtt.status = 'Present';
    console.log(this.studAtt);
    this.canClick = true;
    this.cantClick = false;
    this.comp = this.studAtt;
  }

  absent(data: any) {
    this.studAtt = data;
    this.students.status = 'Absent';
    console.log(this.students);
    this.canClick = false;
    this.cantClick = true;
    this.comp = this.studAtt;
  }

  submit() {
    console.log(this.comp);
  }
}
