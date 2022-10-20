import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.css'],
})
export class WelcomepageComponent implements OnInit {
  data: any;
  constructor(private _router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('http://localhost:9191/faculty').subscribe((res) => {
      if (res.imgUrl == null) {
        this.data = res;
        this.data.imgUrl == 'assets/img/admin.png';
      }
      this.data = res;
      console.log(this.data);
    });
  }

  navigate() {
    this._router.navigate(['/login']);
  }
}
