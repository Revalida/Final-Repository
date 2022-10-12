import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admin-student-list',
  templateUrl: './admin-student-list.component.html',
  styleUrls: ['./admin-student-list.component.scss'],
})
export class AdminStudentListComponent implements OnInit {
  students: any;
  closeResult: any;
  studentNo: any;
  data: any;
  constructor(private http: HttpClient, private modalService: NgbModal) {}

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
        this.ngOnInit(); // reload the table
      });
    this.modalService.dismissAll(); // dismiss the modal
  }
}
