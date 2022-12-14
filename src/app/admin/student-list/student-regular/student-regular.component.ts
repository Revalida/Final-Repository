import { AnimateTimings } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

export class Student {
  constructor(public id: number, public parentFirstname: string) {}
}

@Component({
  selector: 'app-student-regular',
  templateUrl: './student-regular.component.html',
  styleUrls: ['./student-regular.component.scss'],
})
export class StudentRegularComponent implements OnInit {
  student: any;
  regStudents: any;
  closeResult: any;
  studentNo: any;
  data: any;
  parentNo: any;
  updateId: any;
  updateParent: any;
  constructor(private http: HttpClient, private modalService: NgbModal, private toast: ToastrService) {}

  ngOnInit(): void {
    let response = this.http.get('http://localhost:9191/student/regular');
    response.subscribe((data) => (this.regStudents = data));

    let response2 = this.http.get('http://localhost:9191/student/regular');
    response2.subscribe((data) => (this.student = data));
  }
  openParent(parent: any, data: any) {
    console.log(this.student.id);
    this.modalService
      .open(parent, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
    this.studentNo = data.studentNo;
  
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

  addParent(p: NgForm) {
    this.data = p.form.value;
    this.data.studentNo = this.studentNo;

    this.http
      .post('http://localhost:9191/parent/addparent', this.data)
      .subscribe((result) => {
        this.toast.success("Student's parent added successfully!")
        this.ngOnInit(); // reload the table
      });
    this.modalService.dismissAll(); // dismiss the modal
  }
}
