import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';

export interface ChangePassword {
  newPass: string,
  confirmPass: string
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  studentForm!: FormGroup;
  changePasswordForm: FormGroup;
  imageUrl: string = "";
  data: any;
  studentNo: any;

  constructor(
    private fb: FormBuilder, 
    private http: HttpClient,
    private studentService: StudentService) { 

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
        alert('Something went wrong!');
      }
    );


      this.changePasswordForm = this.fb.group({
        newPass: ['', [Validators.required]],
        confirmPass: ['', [Validators.required]]
      })
    }

  ngOnInit(): void {
      this.studentService.getStudentCred().subscribe((data: any) => {
      this.imageUrl = data.profile? "../../../../assets/profiles/" + data.profile : "../../../../assets/img/maleuser.png"
      // this.studentForm.patchValue(data)
    })
    
  }

  // previewImage(e: any) {
  //   if(e.target.files) {
  //      const reader = new FileReader();
  //      reader.readAsDataURL(e.target.files[0]);
  //      reader.onload = (event: any) => {
  //        this.imageUrl = event.target.result;
  //      }
  //     this.studentForm.get('student')?.patchValue(e.target.files[0].name)
  //   }
  //  }

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

   }

}
