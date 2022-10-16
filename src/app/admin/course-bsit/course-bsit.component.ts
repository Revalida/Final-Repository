import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-course-bsit',
  templateUrl: './course-bsit.component.html',
  styleUrls: ['./course-bsit.component.scss'],
})
export class CourseBsitComponent implements OnInit {
  bsit11: any;
  bsit12: any;
  bsit21: any;
  bsit22: any;
  bsit31: any;
  bsit32: any;
  bsit41: any;
  bsit42: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    let response11 = this.http.get('http://localhost:9191/BSIT11');
    response11.subscribe((data11) => (this.bsit11 = data11));

    let response12 = this.http.get('http://localhost:9191/BSIT12');
    response12.subscribe((data12) => (this.bsit12 = data12));

    let response21 = this.http.get('http://localhost:9191/BSIT21');
    response21.subscribe((data21) => (this.bsit21 = data21));

    let response22 = this.http.get('http://localhost:9191/BSIT22');
    response22.subscribe((data22) => (this.bsit22 = data22));

    let response31 = this.http.get('http://localhost:9191/BSIT31');
    response31.subscribe((data31) => (this.bsit31 = data31));

    let response32 = this.http.get('http://localhost:9191/BSIT32');
    response32.subscribe((data32) => (this.bsit32 = data32));

    let response41 = this.http.get('http://localhost:9191/BSIT41');
    response41.subscribe((data41) => (this.bsit41 = data41));

    let response42 = this.http.get('http://localhost:9191/BSIT42');
    response42.subscribe((data42) => (this.bsit42 = data42));
  }
}
