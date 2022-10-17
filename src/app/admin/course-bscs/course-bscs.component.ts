import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-bscs',
  templateUrl: './course-bscs.component.html',
  styleUrls: ['./course-bscs.component.scss'],
})
export class CourseBscsComponent implements OnInit {
  bscs11: any;
  bscs12: any;
  bscs21: any;
  bscs22: any;
  bscs31: any;
  bscs32: any;
  bscs41: any;
  bscs42: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    let response11 = this.http.get('http://localhost:9191/BSCS11');
    response11.subscribe((data11) => (this.bscs11 = data11));

    let response12 = this.http.get('http://localhost:9191/BSCS12');
    response12.subscribe((data12) => (this.bscs12 = data12));

    let response21 = this.http.get('http://localhost:9191/BSCS21');
    response21.subscribe((data21) => (this.bscs21 = data21));

    let response22 = this.http.get('http://localhost:9191/BSCS22');
    response22.subscribe((data22) => (this.bscs22 = data22));

    let response31 = this.http.get('http://localhost:9191/BSCS31');
    response31.subscribe((data31) => (this.bscs31 = data31));

    let response32 = this.http.get('http://localhost:9191/BSCS32');
    response32.subscribe((data32) => (this.bscs32 = data32));

    let response41 = this.http.get('http://localhost:9191/BSCS41');
    response41.subscribe((data41) => (this.bscs41 = data41));

    let response42 = this.http.get('http://localhost:9191/BSCS42');
    response42.subscribe((data42) => (this.bscs42 = data42));
  }
}
