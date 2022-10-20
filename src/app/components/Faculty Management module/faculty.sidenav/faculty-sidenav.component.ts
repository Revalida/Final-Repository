import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faculty-sidenav',
  templateUrl: './faculty-sidenav.component.html',
  styleUrls: ['./faculty-sidenav.component.scss'],
})
export class FacultySidenavComponent implements OnInit {
  imageUrl: string = '';
  name = '';
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('http://localhost:9191/faculty').subscribe(
      (res) => {
        const user = res.find((a: any) => {
          return a.facultyNo === sessionStorage.getItem('PROF_NO');
        });
        if (user) {
          this.imageUrl = user.imgUrl;
          this.name = user.facultyName;
          console.log(this.imageUrl);
        }
      },
      (err) => {
        alert('Something went wrong!');
      }
    );
  }
}
