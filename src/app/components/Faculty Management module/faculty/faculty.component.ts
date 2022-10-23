import { AnimateTimings } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

export class Faculty {
  constructor(public id: number, public facultyPassword: string) {}
}

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.scss'],
})
export class FacultyComponent implements OnInit {
  opened = false;
  profForm: FormGroup;
  changePasswordForm: FormGroup;
  imageUrl: string = '';
  data: any;
  studentNo: any;
  showButton = true;
  updatePass: any;
  updateId: any;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.profForm = this.fb.group({
      firstName: ['', [Validators.required]],
      middleName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
    });

    this.profForm.patchValue({});

    this.changePasswordForm = this.fb.group({
      newPass: ['', [Validators.required]],
      confirmPass: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:9191/faculty').subscribe(
      (res) => {
        const user = res.find((a: any) => {
          return a.facultyNo === sessionStorage.getItem('FACULTY_NO');
        });
        if (user) {
          this.data = user;
          this.imageUrl = this.data.imgUrl;
        }
      },
      (err) => {
        alert('Something went wrong!');
      }
    );
    console.log(this.data);
  }

  previewImage(e: any) {
    this.showButton = false;
    if (e.target.files) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.imageUrl = event.target.result;
        console.log(event.target.result);
      };
      this.profForm.get('professor')?.patchValue(e.target.files[0].name);
    }
    console.log(
      this.profForm.get('professor')?.patchValue(e.target.files[0].name)
    );
  }

  submit = () => {
    // const userData = this.studentForm.getRawValue() as Student
    // this.studentService.updateStudentInfo(userData).subscribe( x => {
    //   let userInfo = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem("user"))))
    //   localStorage.setItem("user", JSON.stringify({accessToken: userInfo.accessToken, user: x}));
    //   if(!x.error){
    //     this.alert.success("Successful");
    //   }
    // })
  };

  onChangePassword(f: NgForm, data: Faculty) {
    console.log(f.form.value);
    this.updatePass = data.facultyPassword;
    this.updateId = data.id;
    // console.log(this.updateId);
    // console.log(data.facultyPassword);
    // console.log(this.updatePass);
    this.http
      .put(
        'http://localhost:9191/updatefacultypassword/' + this.updateId,
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

  toogleSidebar() {
    this.opened = !this.opened;
  }
}
