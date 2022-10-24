import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss']
})
export class GradesComponent implements OnInit {
  studentNo = '';
  data: any;

  constructor(private http: HttpClient, private toast: ToastrService) { }

  ngOnInit(): void {
    this.studentNo = JSON.stringify(sessionStorage.getItem('STUDENT_NO') || '{}');
    this.studentNo = this.studentNo.replace(/"/g, '');

    this.http.get('http://localhost:9191/grade/' + this.studentNo).subscribe(
      (res) => {
        this.data = res;
      },
      (err) => {
        this.toast.error('Something went wrong!');
      }
    );
  }

}
