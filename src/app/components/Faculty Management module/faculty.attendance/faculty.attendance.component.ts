import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-faculty.attendance',
  templateUrl: './faculty.attendance.component.html',
  styleUrls: ['./faculty.attendance.component.scss'],
})
export class FacultyAttendanceComponent implements OnInit {
  students: any;
  studAtt: any;
  status: string = 'Present';
  canClick = false;
  cantClick = false;
  comp: any;
  opened = false;
  datas: any;
  section: any;
  faculty: any;
  data: any;
  formValue!: FormGroup;
  ass: any;
  facultydata: any;

  constructor(private formbuilder: FormBuilder, private http: HttpClient, private toast: ToastrService) {}

  ngOnInit(): void {
    let response = this.http.get('http://localhost:9191/student');
    response.subscribe((data) => (this.students = data));
    this.http
      .get(
        'http://localhost:9191/subject/' + sessionStorage.getItem('FACULTY_NO')
      )
      .subscribe((data) => (this.faculty = data));
    console.log(this.faculty);
    this.formValue = this.formbuilder.group({
      grade: [null, Validators.required],
      comment: ['', Validators.required],
      subjectCode: [''],
    });
  }
  evaluate(data: any) {
    this.facultydata = data;
  }

  present(data: any) {
    this.studAtt = data;
    this.studAtt.status = this.status;
    console.log(this.studAtt);
    this.canClick = true;
    this.cantClick = false;
    console.log(this.studAtt);
    this.http
      .post('http://localhost:9191/attendance/addattendance', this.studAtt)
      .subscribe((result) => {
        this.toast.success("Attendance Added Successfully!")
      });
  }

  absent(data: any) {
    this.studAtt = data;
    this.studAtt.status = 'Absent';
    this.ngOnInit;
    console.log(this.studAtt);
    this.canClick = false;
    this.cantClick = true;
    this.http
      .post('http://localhost:9191/attendance/addattendance', this.studAtt)
      .subscribe((result) => {
        this.toast.success("Attendance Added Successfully!")
      });
  }
  trial(s: NgForm) {
    this.section = s.form.value;
    this.http
      .get('http://localhost:9191/student/' + this.section.section)
      .subscribe(
        (res) => {
          this.students = res;
        },
        (err) => {
          this.toast.error('Something went wrong!');
        }
      );
  }

  submit() {
    this.ass = this.formValue.value;
    this.ass.studentNo = this.facultydata.studentNo;
    this.ass.section = this.facultydata.section;
    if (this.ass.grade >= 75) {
      this.ass.remarks = 'PASSED';
    } else {
      this.ass.remarks = 'FAILED';
    }
    this.http
      .post('http://localhost:9191/grades/addgrade', this.ass)
      .subscribe((result) => {
        this.toast.success("Grade Added to the Student!")
      });
  }
}
