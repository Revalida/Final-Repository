import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
  onChangePassword = (): any => {
    // const userCred = this.changePasswordForm.getRawValue() as ChangePassword
    // if(!userCred.newPass || !userCred.confirmPass) {
    //   return this.alert.error("Please fill all the required fields!")
    // }
    // if(userCred.newPass !== userCred.confirmPass) {
    //   return  this.alert.error("Password does not match!");
    // }
    // const data = { password: userCred.newPass, email: this.studentForm.get('email')?.getRawValue()} as Users
    // this.studentService.updateStudentInfo(data).subscribe( x => {
    //   if(!x.error){
    //     this.alert.success("Password successfully changed!");
    //   }
    // })
  };

  toogleSidebar() {
    this.opened = !this.opened;
  }
}
