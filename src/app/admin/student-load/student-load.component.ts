import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-load',
  templateUrl: './student-load.component.html',
  styleUrls: ['./student-load.component.scss'],
})
export class StudentLoadComponent implements OnInit {
  bsit11: any;
  prof: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    let response11 = this.http.get('http://localhost:9191/BSIT11');
    response11.subscribe((data11) => (this.bsit11 = data11));

    this.http
      .get('http://localhost:9191/faculty')
      .subscribe((res) => ((this.prof = res), console.log(this.prof)));
  }

  trial() {
    console.log(this.bsit11);
  }
}
