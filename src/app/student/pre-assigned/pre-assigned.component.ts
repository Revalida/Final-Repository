import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pre-assigned',
  templateUrl: './pre-assigned.component.html',
  styleUrls: ['./pre-assigned.component.scss']
})
export class PreAssignedComponent implements OnInit {
  clock!: Observable<Date>;
  data: any;
  studentNo = '';

  constructor(private http: HttpClient, private toast: ToastrService) {
  }

  ngOnInit(): void {
    // let response = this.http.get('http://localhost:9191/load');
    // response.subscribe((data) => (this.data = data));
    this.studentNo = JSON.stringify(sessionStorage.getItem('STUDENT_NO') || '{}');
    this.studentNo = this.studentNo.replace(/"/g, '');
    
    this.http.get('http://localhost:9191/student/load/' + this.studentNo).subscribe(
      (res) => {
        this.data = res;
        console.log(this.data);
      },
      (err) => {
        this.toast.error('Something went wrong!');
      }
    );
  }

  edit = () => {

  }

  submit = () => {

  }
  
}

