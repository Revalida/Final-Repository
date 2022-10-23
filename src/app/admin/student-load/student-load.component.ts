import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  load: any;
  updateLoad: any;
  lods: any;
  constructor(private http: HttpClient, private modalService: NgbModal) {}

  ngOnInit(): void {
    let response = this.http.get('http://localhost:9191/BSIT11');
    response.subscribe((data) => (this.bsit11 = data));

    let res = this.http.get('http://localhost:9191/faculty');
    res.subscribe((data1) => (this.prof = data1));

    let res1 = this.http.get('http://localhost:9191/studentload');
    res1.subscribe((data2) => (this.load = data2));
    console.log(this);
  }

  openStudent(student: any, data: any) {
    this.updateLoad = data;
    console.log(this.updateLoad);
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

    console.log(this.studLoad);
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
    this.studLoad.facultyNo = s.form.value.facultyNo;
    this.studLoad.section = s.form.value.section;
    this.studLoad.schedule = s.form.value.schedule;
    console.log(this.studLoad);
    console.log(s.form.value.subjectCode);

    this.http
      .post('http://localhost:9191/student/load', this.studLoad)
      .subscribe((result) => {
        console.log(result);
      });

    this.modalService.dismissAll(); // dismiss the modal
  }
}
