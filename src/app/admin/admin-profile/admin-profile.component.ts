import { HttpClient } from '@angular/common/http';
import { AstMemoryEfficientTransformer } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

export interface ChangePassword {
  newPass: string;
  confirmPass: string;
}

export class Admin {
  constructor(public adminId: number, public adminPassword: string) {}
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
  updatePass: any;
  updateId: any;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private modalService: NgbModal,
    private toast: ToastrService
  ) {
    this.http.get<any>('http://localhost:9191/admin').subscribe(
      (res) => {
        const user = res.find((a: any) => {
          return a.adminEmail === sessionStorage.getItem('ADMIN_EMAIL');
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
      adminPassword: ['', [Validators.required]],
      confirmPass: ['', [Validators.required]],
    });
    console.log(this.fb.group);
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

  onChangePassword(f: NgForm, data: Admin) {
    console.log(f.form.value);
    this.updatePass = data.adminPassword;
    this.updateId = data.adminId;
    // console.log(this.updateId);
    // console.log(data.adminPassword);
    // console.log(this.updatePass);
    this.http
      .put(
        'http://localhost:9191/updateadminpassword/' + this.updateId,
        f.value
      )
      .subscribe((result) => {
        this.ngOnInit(); // reload the table
      });
    // console.log(this.updatePass);
    // console.log(this.data.adminPassword);
    const userCred = this.changePasswordForm.getRawValue() as ChangePassword;
    if (!userCred.newPass || !userCred.confirmPass) {
      // return this.toast.error('Please fill all the required fields!');
    }

    if (userCred.newPass !== userCred.confirmPass) {
      // return this.toast.error('Password does not match!');
    }
  }
}
