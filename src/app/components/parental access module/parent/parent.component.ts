import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { StudentService } from 'src/app/services/student.service';

export class Parent {
  constructor(public id: number, public parentPassword: string) {}
}

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  clock!: Observable<Date>;
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
  }

  onChangePassword(f: NgForm, data: Parent) {
    console.log(f.form.value);
    this.updatePass = data.parentPassword;
    this.updateId = data.id;
    // console.log(this.updateId);
    // console.log(data.adminPassword);
    // console.log(this.updatePass);
    this.http
      .put(
        'http://localhost:9191/updateparentpassword/' + this.updateId,
        f.value
      )
      .subscribe((result) => {
        this.ngOnInit(); // reload the table
      });
    // console.log(this.updatePass);
    // console.log(this.data.adminPassword);
    // const userCred = this.changePasswordForm.getRawValue() as ChangePassword;
    // if (!userCred.newPass || !userCred.confirmPass) {
    //   // return this.toast.error('Please fill all the required fields!');
    // }

    // if (userCred.newPass !== userCred.confirmPass) {
    //   // return this.toast.error('Password does not match!');
    // }
  }
}
