import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

export class StudentLoad {
  constructor(public id: number) {}
}

@Component({
  selector: 'app-student-load',
  templateUrl: './student-load.component.html',
  styleUrls: ['./student-load.component.scss'],
})
export class StudentLoadComponent implements OnInit {
  bsit11: any;
  prof: any;
  studLoad: any;
  closeResult: any;
  data: any;
  updateId: any;
  loading = '';
  lodi: any;
  updateLoad = '';
  constructor(private http: HttpClient, private modalService: NgbModal) {}

  ngOnInit(): void {
    let response = this.http.get('http://localhost:9191/BSIT11');
    response.subscribe((data) => (this.bsit11 = data));

    let res = this.http.get('http://localhost:9191/faculty');
    res.subscribe((data1) => (this.prof = data1));

    let res1 = this.http.get('http://localhost:9191/studentload');
    res1.subscribe((data2) => (this.lodi = data2));
    console.log(this);
  }

  // load(data: any, prof: any) {
  //   this.studLoad = data;
  //   this.studLoad.facultyNo = prof.facultyNo;
  //   console.log(this.studLoad);
  //   this.canClick = true;
  //   this.cantClick = false;
  //   console.log(this.studLoad);
  //   console.log(prof.facultyNo);
  //   this.http
  //     .post('http://localhost:9191/student/load', this.studLoad)
  //     .subscribe((result) => {
  //       console.log(result);
  //     });
  // }

  openStudent(student: any, data: any) {
    console.log(this.updateLoad);
    this.updateId = student.id;
    this.studLoad = data;
    console.log(this.studLoad);
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
    this.http
      .post('http://localhost:9191/student/load', this.studLoad)
      .subscribe((result) => {
        console.log(result);
      });

    this.loading = data.subjectId;
    console.log(this.loading);

    // this.updateLoad = lodi.loadId;
    // console.log(this.updateLoad);
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

  addSchedule(s: NgForm) {
    this.data = s.form.value;
    this.data.lId = this.loading;
    this.data.console.log(s.form.value);
    this.http
      .patch('http://localhost:9191/updateload/' + this.loading, s.value)
      .subscribe((result) => {
        this.ngOnInit(); // reload the table
      });

    this.modalService.dismissAll(); // dismiss the modal
  }
}
