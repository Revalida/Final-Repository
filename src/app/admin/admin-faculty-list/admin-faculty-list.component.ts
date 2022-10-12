import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-faculty-list',
  templateUrl: './admin-faculty-list.component.html',
  styleUrls: ['./admin-faculty-list.component.scss'],
})
export class AdminFacultyListComponent implements OnInit {
  faculty: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    let response = this.http.get('http://localhost:9191/faculty');
    response.subscribe((data) => (this.faculty = data));
  }
}
