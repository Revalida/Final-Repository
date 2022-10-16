import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  showModal = false;
  studentForm: FormGroup;
  changePasswordForm: FormGroup;
  imageUrl: string = "";
  dateNow = new Date();

  constructor(private fb: FormBuilder, 
    private studentService: StudentService, 
    private router: Router) { 
      this.studentForm = this.fb.group({
        student_No: [''],
        stud_firstName: ['', [Validators.required]],
        stud_middleName: ['', [Validators.required]],
        stud_lastName: ['', [Validators.required]],
        stud_gender: ['', [Validators.required]],
        bday: [''],
        parent: [''],
  
      })
  
      this.changePasswordForm = this.fb.group({
        newPass: ['', [Validators.required]],
        confirmPass: ['', [Validators.required]]
      })
    }

  ngOnInit(): void {
    // this.studentService.getStudentCred().subscribe((x: any) => {
    //   this.imageUrl = x.profile? "../../../../assets/profiles/" + x.profile : "../../../../assets/profiles/empty.png"
    //   this.studentForm.patchValue(x)
    // })
  }

  previewImage(e: any) {
    if(e.target.files) {
       const reader = new FileReader();
       reader.readAsDataURL(e.target.files[0]);
       reader.onload = (event: any) => {
         this.imageUrl = event.target.result;
       }
      this.studentForm.get('profile')?.patchValue(e.target.files[0].name)
    }
   }

   submit =() => {
    // const userData = this.studentForm.getRawValue() as Student
    // this.studentService.updateStudentInfo(userData).subscribe( x => {
    //   let userInfo = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem("user"))))
    //   localStorage.setItem("user", JSON.stringify({accessToken: userInfo.accessToken, user: x}));
    //   if(!x.error){
    //     this.alert.success("Successful");
    //   }
      
    // })
   }
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
