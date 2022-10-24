import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  clock!: Observable<Date>;
  

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private studentService: StudentService,
    private toast: ToastrService
  ) {}

  ngOnInit(): void {
    
  }
}
