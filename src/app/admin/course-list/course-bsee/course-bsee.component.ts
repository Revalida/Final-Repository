import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-bsee',
  templateUrl: './course-bsee.component.html',
  styleUrls: ['./course-bsee.component.scss'],
})
export class CourseBseeComponent implements OnInit {
  bsee11: any;
  bsee12: any;
  bsee21: any;
  bsee22: any;
  bsee31: any;
  bsee32: any;
  bsee41: any;
  bsee42: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    let response11 = this.http.get('http://localhost:9191/BSEE11');
    response11.subscribe((data11) => (this.bsee11 = data11));

    let response12 = this.http.get('http://localhost:9191/BSEE12');
    response12.subscribe((data12) => (this.bsee12 = data12));

    let response21 = this.http.get('http://localhost:9191/BSEE21');
    response21.subscribe((data21) => (this.bsee21 = data21));

    let response22 = this.http.get('http://localhost:9191/BSEE22');
    response22.subscribe((data22) => (this.bsee22 = data22));

    let response31 = this.http.get('http://localhost:9191/BSEE31');
    response31.subscribe((data31) => (this.bsee31 = data31));

    let response32 = this.http.get('http://localhost:9191/BSEE32');
    response32.subscribe((data32) => (this.bsee32 = data32));

    let response41 = this.http.get('http://localhost:9191/BSEE41');
    response41.subscribe((data41) => (this.bsee41 = data41));

    let response42 = this.http.get('http://localhost:9191/BSEE42');
    response42.subscribe((data42) => (this.bsee42 = data42));
  }
}
