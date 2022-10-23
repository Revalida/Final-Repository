import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-student-load-bsit',
  templateUrl: './student-load-bsit.component.html',
  styleUrls: ['./student-load-bsit.component.scss'],
})
export class StudentLoadBsitComponent implements OnInit {
  bsit11: any;
  bsit12: any;
  bsit21: any;
  bsit22: any;
  bsit31: any;
  bsit32: any;
  bsit41: any;
  bsit42: any;
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

    let response1 = this.http.get('http://localhost:9191/BSIT12');
    response1.subscribe((data) => (this.bsit12 = data));

    let response21 = this.http.get('http://localhost:9191/BSIT21');
    response21.subscribe((data) => (this.bsit21 = data));

    let response22 = this.http.get('http://localhost:9191/BSIT22');
    response22.subscribe((data22) => (this.bsit22 = data22));

    let response31 = this.http.get('http://localhost:9191/BSIT31');
    response31.subscribe((data31) => (this.bsit31 = data31));

    let response32 = this.http.get('http://localhost:9191/BSIT32');
    response32.subscribe((data32) => (this.bsit32 = data32));

    let response41 = this.http.get('http://localhost:9191/BSIT41');
    response41.subscribe((data41) => (this.bsit41 = data41));

    let response42 = this.http.get('http://localhost:9191/BSIT42');
    response42.subscribe((data42) => (this.bsit42 = data42));

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

    this.http
      .post('http://localhost:9191/faculty/load', this.studLoad)
      .subscribe((result) => {
        console.log(result);
      });

    this.modalService.dismissAll(); // dismiss the modal
  }
}
