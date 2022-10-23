import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClockService } from 'src/app/services/clock.service';

@Component({
  selector: 'app-parent-sidenav',
  templateUrl: './parent-sidenav.component.html',
  styleUrls: ['./parent-sidenav.component.scss'],
})
export class ParentSidenavComponent implements OnInit {
  imageUrl: string = '';
  name = '';
  clock!: Observable<Date>;
  constructor(private http: HttpClient, private clockService: ClockService) {}

  ngOnInit(): void {
    this.http.get<any>('http://localhost:9191/faculty').subscribe(
      (res) => {
        const user = res.find((a: any) => {
          return a.facultyNo === sessionStorage.getItem('FACULTY_NO');
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
    this.clock = this.clockService.getClock();
  }
}
