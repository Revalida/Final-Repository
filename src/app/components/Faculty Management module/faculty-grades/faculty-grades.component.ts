import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-faculty-grades',
  templateUrl: './faculty-grades.component.html',
  styleUrls: ['./faculty-grades.component.scss'],
})
export class FacultyGradesComponent implements OnInit {
  students: any;
  formValue!: FormGroup;
  ass = '';
  constructor(private formbuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      grade: ['', Validators.required],
      comment: ['', Validators.required],
    });
    this.http
      .get('http://localhost:9191/student')
      .subscribe((data) => (this.students = data));
    console.log(this.students);
  }

  submit() {
    this.ass = this.formValue.value;
    console.log(this.ass);
    console.log(this.students);
  }
}
