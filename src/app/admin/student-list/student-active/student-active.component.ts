import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-student-active',
  templateUrl: './student-active.component.html',
  styleUrls: ['./student-active.component.scss'],
})
export class StudentActiveComponent implements OnInit {
  students: any;
  closeResult: any;
  studentNo = '';
  data: any;
  parentNo: any;
  constructor(private http: HttpClient, private modalService: NgbModal, private toast: ToastrService) {}

  ngOnInit(): void {
    let response = this.http.get('http://localhost:9191/student');
    response.subscribe((data) => (this.students = data));
  }
  openParent(parent: any, data: any) {
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

    this.studentNo = data.studNo;
    console.log(this.studentNo);
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
    this.data.studNo = this.studentNo;
    this.http
      .post('http://localhost:9191/parent/addparent', this.data)
      .subscribe((result) => {
        this.toast.success("Student's parent added successfully!")
        this.ngOnInit(); // reload the table
      });
    this.data = p.form.value;
    this.data.parentNo = this.parentNo;
    this.http
      .patch('http://localhost:9191/updatestudent/', this.data)
      .subscribe((result) => {
        this.toast.success("Student updated successfully!")
        this.ngOnInit(); // reload the table
      });
    this.modalService.dismissAll(); // dismiss the modal
  }
}
