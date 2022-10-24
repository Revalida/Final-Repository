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
    // let response = this.http.get<any>('http://localhost:9191/student');
    // response.subscribe((data) => (this.data = data));

  }

  ngOnInit(): void {
    this.studentNo = JSON.stringify(sessionStorage.getItem('STUDENT_NO') || '{}');
    this.studentNo = this.studentNo.replace(/"/g, '');

    this.http.get('http://localhost:9191/studentload/' + this.studentNo).subscribe(
      (res) => {
        this.data = res;
        // console.log(this.data);
      },
      (err) => {
        this.toast.error('Something went wrong!');
      }
    );


  }

  // edit = () => {

  // }

  onDecline = () => {
    this.toast.error("Something went wrong...")
  }

  onSubmit(){
    this.toast.success("Sending to the admin...")
  }
  
}

