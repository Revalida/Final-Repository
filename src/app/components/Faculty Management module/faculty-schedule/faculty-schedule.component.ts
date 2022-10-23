import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faculty-schedule',
  templateUrl: './faculty-schedule.component.html',
  styleUrls: ['./faculty-schedule.component.scss'],
})
export class FacultyScheduleComponent implements OnInit {
  load: any;
  facultyNo: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.facultyNo = sessionStorage.getItem('FACULTY_NO');
    this.http
      .get('http://localhost:9191/subject/' + this.facultyNo)
      .subscribe((data) => (this.load = data));
    console.log(this.load);
  }
}
