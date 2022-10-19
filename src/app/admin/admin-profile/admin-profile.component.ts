import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StudentService } from 'src/app/services/student.service';

export interface ChangePassword {
  newPass: string;
  confirmPass: string;
}

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss'],
})
export class AdminProfileComponent implements OnInit {
  studentForm!: FormGroup;
  changePasswordForm: FormGroup;
  imageUrl: string = '';
  data: any;
  studentNo: any;
  students: any;
  closeResult: any;
  opened: any;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private studentService: StudentService,
    private modalService: NgbModal
  ) {
    this.http.get<any>('http://localhost:9191/admin').subscribe();

    this.changePasswordForm = this.fb.group({
      newPass: ['', [Validators.required]],
      confirmPass: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  openStudent(student: any) {
    this.modalService
      .open(student, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  addStudent(s: NgForm) {
    console.log(s.form.value);
    this.http
      .post('http://localhost:9191/student/addstudent', s.value)
      .subscribe((result) => {
        this.ngOnInit(); // reload the table
      });
    this.modalService.dismissAll(); // dismiss the modal
  }

  openFaculty(faculty: any) {
    this.modalService
      .open(faculty, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  addFaculty(f: NgForm) {
    console.log(f.form.value);
    this.http
      .post('http://localhost:9191/faculty/addfaculty', f.value)
      .subscribe((result) => {
        this.ngOnInit(); // reload the table
      });
    this.modalService.dismissAll(); // dismiss the modal
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
  };
}
