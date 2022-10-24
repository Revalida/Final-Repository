import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  clock!: Observable<Date>;
  changePasswordForm: FormGroup;
  imageUrl: string = '';
  data: any;
  studentNo: any;
  updatePass: any;
  updateId: any;
  form: any;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private studentService: StudentService,
    private toast: ToastrService
  ) {}

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

    this.changePasswordForm = this.fb.group({
      newPass: ['', [Validators.required]],
      confirmPass: ['', [Validators.required]],
    });
  }
}
