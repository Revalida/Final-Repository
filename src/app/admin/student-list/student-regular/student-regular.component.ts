import { AnimateTimings } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

export class Student {
  constructor(public id: number, public parentFirstname: string) {}
}

@Component({
  selector: 'app-student-regular',
  templateUrl: './student-regular.component.html',
  styleUrls: ['./student-regular.component.scss'],
})
export class StudentRegularComponent implements OnInit {
  regStudents: any;
  closeResult: any;
  studNo: any;
  data: any;
  parentNo: any;
  updateId: any;
  updateParent: any;
  constructor(private http: HttpClient, private modalService: NgbModal) {}

  ngOnInit(): void {
    let response = this.http.get('http://localhost:9191/student/regular');
    response.subscribe((data) => (this.regStudents = data));
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

  addParent(p: NgForm, data: Student) {
    // this.data = p.form.value;
    console.log(this.regStudents.id);
    this.studNo = data.id;
    console.log(this.studNo);
    this.http
      .post('http://localhost:9191/parent/addparent', this.data)
      .subscribe((result) => {
        this.ngOnInit(); // reload the table
      });
    this.modalService.dismissAll(); // dismiss the modal
  }
}
