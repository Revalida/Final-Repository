import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ClockService } from 'src/app/services/clock.service';

@Component({
  selector: 'app-student-sidenav',
  templateUrl: './student-sidenav.component.html',
  styleUrls: ['./student-sidenav.component.scss']
})
export class StudentSidenavComponent implements OnInit {
  data: any;
  clock!: Observable<Date>;

  constructor(private clockService: ClockService, private http: HttpClient, private toast: ToastrService) { }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:9191/student').subscribe(
      (res) => {
        const user = res.find((a: any) => {
          return a.studentNo === sessionStorage.getItem('STUDENT_NO');
        });
        if (user) {
          this.data = user;
          console.log(this.data);
        } else {
          console.log(res);
        }
      },
      (err) => {
        this.toast.error('Something went wrong!');
      }
    );
    this.clock = this.clockService.getClock();
  }

}
