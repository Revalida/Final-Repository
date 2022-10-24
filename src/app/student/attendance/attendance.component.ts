import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {
  studentNo = '';
  datas: any;

  constructor(private http: HttpClient, private toast: ToastrService) { 
    
  }

  ngOnInit(): void {
    this.studentNo = JSON.stringify(sessionStorage.getItem('STUDENT_NO') || '{}');
    this.studentNo = this.studentNo.replace(/"/g, '');

    this.http.get('http://localhost:9191/attendance/' + this.studentNo).subscribe(
      (res) => {
        this.datas = res;
      },
      (err) => {
        this.toast.error('Something went wrong!');
      }
    );
  }

}
