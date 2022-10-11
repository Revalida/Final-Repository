import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-student-list',
  templateUrl: './admin-student-list.component.html',
  styleUrls: ['./admin-student-list.component.scss'],
})
export class AdminStudentListComponent implements OnInit {
  students: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    let response = this.http.get('http://localhost:9191/student');
    response.subscribe((data) => (this.students = data));
  }
}
