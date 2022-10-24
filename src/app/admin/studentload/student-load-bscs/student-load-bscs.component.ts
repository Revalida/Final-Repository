import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-student-load-bscs',
  templateUrl: './student-load-bscs.component.html',
  styleUrls: ['./student-load-bscs.component.scss'],
})
export class StudentLoadBscsComponent implements OnInit {
  bscs11: any;
  bscs12: any;
  bscs21: any;
  bscs22: any;
  bscs31: any;
  bscs32: any;
  bscs41: any;
  bscs42: any;
  prof: any;
  studLoad: any;
  closeResult: any;
  data: any;
  updateId: any;
  loading = '';
  load: any;
  updateLoad: any;
  lods: any;
  constructor(private http: HttpClient, private modalService: NgbModal, private toast: ToastrService) {}

  ngOnInit(): void {
    let response11 = this.http.get('http://localhost:9191/BSCS11');
    response11.subscribe((data11) => (this.bscs11 = data11));

    let response12 = this.http.get('http://localhost:9191/BSCS12');
    response12.subscribe((data12) => (this.bscs12 = data12));

    let response21 = this.http.get('http://localhost:9191/BSCS21');
    response21.subscribe((data21) => (this.bscs21 = data21));

    let response22 = this.http.get('http://localhost:9191/BSCS22');
    response22.subscribe((data22) => (this.bscs22 = data22));

    let response31 = this.http.get('http://localhost:9191/BSCS31');
    response31.subscribe((data31) => (this.bscs31 = data31));

    let response32 = this.http.get('http://localhost:9191/BSCS32');
    response32.subscribe((data32) => (this.bscs32 = data32));

    let response41 = this.http.get('http://localhost:9191/BSCS41');
    response41.subscribe((data41) => (this.bscs41 = data41));

    let response42 = this.http.get('http://localhost:9191/BSCS42');
    response42.subscribe((data42) => (this.bscs42 = data42));

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

    this.http
      .post('http://localhost:9191/student/load', this.studLoad)
      .subscribe((result) => {
        this.toast.success("Schedule added successfully!")
      });

    this.http
      .post('http://localhost:9191/faculty/load', this.studLoad)
      .subscribe((result) => {
        this.toast.success("Schedule added successfully!")
      });

    this.modalService.dismissAll(); // dismiss the modal
  }
}
