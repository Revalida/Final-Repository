import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ClockService } from 'src/app/services/clock.service';

@Component({
  selector: 'app-admin-sidenav',
  templateUrl: './admin-sidenav.component.html',
  styleUrls: ['./admin-sidenav.component.scss'],
})
export class AdminSidenavComponent implements OnInit {
  students: any;
  closeResult: any;
  clock!: Observable<Date>;
  data: any;
  
  constructor(private http: HttpClient, 
    private modalService: NgbModal, 
    private clockService: ClockService,
    private toast: ToastrService) {}

  ngOnInit() {
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
    this.clock = this.clockService.getClock();
  }

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
        this.toast.success("Student Added Successfully!")
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
        this.toast.success("New Professor Added Successfully!")
        this.ngOnInit(); // reload the table
      });
    this.modalService.dismissAll(); // dismiss the modal
  }
}
