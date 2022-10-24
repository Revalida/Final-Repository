import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parentgrade',
  templateUrl: './parentgrade.component.html',
  styleUrls: ['./parentgrade.component.scss'],
})
export class ParentgradeComponent implements OnInit {
  load: any;
  facultyNo: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.facultyNo = sessionStorage.getItem('STUDENT_NO');
    this.http
      .get('http://localhost:9191/studgrades/' + this.facultyNo)
      .subscribe((data) => (this.load = data));
    console.log(this.load);
  }
}
