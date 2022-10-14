import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-course-list',
  templateUrl: './admin-course-list.component.html',
  styleUrls: ['./admin-course-list.component.scss'],
})
export class AdminCourseListComponent implements OnInit {
  subject: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    let response = this.http.get('http://localhost:9191/subject');
    response.subscribe((data) => (this.subject = data));
  }
}
