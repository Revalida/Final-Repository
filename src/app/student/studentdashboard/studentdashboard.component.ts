import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-studentdashboard',
  templateUrl: './studentdashboard.component.html',
  styleUrls: ['./studentdashboard.component.scss'],
})
export class StudentdashboardComponent implements OnInit {
  opened = false;
  data: any;

  toogleSidebar() {
    this.opened = !this.opened;
  }

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('http://localhost:9191/student').subscribe(
      (res) => {
        const user = res.find((a: any) => {
          return a.studentNo === sessionStorage.getItem('STUDENT_NO');
        });
        if (user) {
          this.data = user;
          console.log(this.data.firstName);
        } else {
          console.log(res);
        }
      },
      (err) => {
        alert('Something went wrong!');
      }
    );
  }
}
