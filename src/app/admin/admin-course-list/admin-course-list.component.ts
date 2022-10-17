import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-course-list',
  templateUrl: './admin-course-list.component.html',
  styleUrls: ['./admin-course-list.component.scss'],
})
export class AdminCourseListComponent implements OnInit {
  subjectCS: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    let response = this.http.get('http://localhost:9191/subjectCS');
    response.subscribe((data) => (this.subjectCS = data));
  }
}
