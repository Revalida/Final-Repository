import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { StudentService } from 'src/app/services/student.service';

export interface ChangePassword {
  newPass: string;
  confirmPass: string;
}

export class Student {
  constructor(public id: number, public studentPassword: string) {}
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  clock!: Observable<Date>;
  ngForm: FormGroup;
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
  ) {
    this.http.get<any>('http://localhost:9191/student').subscribe(
      (res) => {
        const user = res.find((a: any) => {
          return a.studentNo === sessionStorage.getItem('STUDENT_NO');
        });
        if (user) {
          this.data = user;
          // console.log(this.data);
        } else {
          // console.log(res);
        }
      },
      (err) => {
        this.toast.error('Something went wrong!');
      }
    );

    this.ngForm = this.fb.group({
      studentPassword: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.studentService.getStudentCred().subscribe((data: any) => {
      this.imageUrl = data.profile
        ? '../../../../assets/profiles/' + data.profile
        : '../../../../assets/img/maleuser.png';
      // this.studentForm.patchValue(data)
    });
  }

  onChangePassword(f: NgForm, data: Student) {
   
    this.updatePass = data.studentPassword;
    this.updateId = data.id;

    this.http
      .put(
        'http://localhost:9191/updatestudentpassword/' + this.updateId,
        f.value
      )
      .subscribe((result) => {
        this.toast.success("Your Password Updated Successfully!")
        this.ngOnInit(); // reload the table
      });

  }
}
