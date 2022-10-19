import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Professor } from 'src/app/models/professor';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user = new User();
  professor = new Professor();
  msg = '';
  adminEmail = '';
  adminPassword = '';
  studentNo = '';
  showAdmin = false;
  showUser = true;
  showProf = false;
  showParent = false;

  loginForm!: FormGroup;
  profForm!: FormGroup;

  constructor(
    private _service: LoginService,
    private http: HttpClient,
    private _router: Router,
    private formbuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  showStudentButton() {
    this.showAdmin = false;
    this.showUser = true;
    this.showProf = false;
    this.showParent = false;
  }

  showParentButton() {
    this.showAdmin = false;
    this.showUser = false;
    this.showProf = false;
    this.showParent = true;
  }

  showAdminButton() {
    this.showAdmin = true;
    this.showUser = false;
    this.showProf = false;
    this.showParent = false;
  }

  showProfButton() {
    this.showAdmin = false;
    this.showUser = false;
    this.showProf = true;
    this.showParent = false;
  }

  login() {
    this.http.get<any>('http://localhost:9191/student').subscribe(
      (res) => {
        const user = res.find((a: any) => {
          return (
            a.studentNo === this.loginForm.value.username &&
            a.studentPassword === this.loginForm.value.password
          );
        });
        if (user) {
          this.loginForm.reset();
          this._router.navigate(['profile']);
          sessionStorage.setItem('USER', 'user');
          sessionStorage.setItem('ROLE', user.type);
          sessionStorage.setItem('STUDENT_NO', user.studentNo);
          console.log(user);
        } else {
          alert('User not found!');
          this.loginForm.reset();
          console.log(res);
        }
      },
      (err) => {
        alert('Something went wrong!');
      }
    );
  }

  loginParent() {
    this.http.get<any>('http://localhost:9191/parent').subscribe(
      (res) => {
        const user = res.find((a: any) => {
          return (
            a.parentNo === this.loginForm.value.username &&
            a.parentPassword === this.loginForm.value.password
          );
        });
        if (user) {
          this.loginForm.reset();
          this._router.navigate(['parentdashboard']);
          console.log(user);
          sessionStorage.setItem('USER', 'user');
          sessionStorage.setItem('ROLE', user.type);
          sessionStorage.setItem('STUDENT_NO', user.studentNo);
        } else {
          alert('User not found!');
          this.loginForm.reset();
          console.log(res);
        }
      },
      (err) => {
        alert('Something went wrong!');
      }
    );
  }

  loginProfessor() {
    this.http.get<any>('http://localhost:9191/faculty').subscribe(
      (res) => {
        const user = res.find((a: any) => {
          return (
            a.facultyNo === this.loginForm.value.username &&
            a.facultyPassword === this.loginForm.value.password
          );
        });
        if (user) {
          this.loginForm.reset();
          this._router.navigate(['facultydashboard']);
          sessionStorage.setItem('USER', 'user');
          sessionStorage.setItem('ROLE', user.type);
          sessionStorage.setItem('PROF_NO', user.facultyNo);
        } else {
          alert('User not found!');
          this.loginForm.reset();
          console.log(res);
        }
      },
      (err) => {
        alert('Something went wrong!');
      }
    );
  }

  adminLogin() {
    this.http.get<any>('http://localhost:9191/admin').subscribe(
      (res) => {
        const user = res.find((a: any) => {
          return (
            a.adminEmail === this.loginForm.value.username &&
            a.adminPassword === this.loginForm.value.password
          );
        });
        if (user) {
          this.loginForm.reset();
          this._router.navigate(['admindashboard']);
          sessionStorage.setItem('USER', 'user');
          sessionStorage.setItem('ROLE', user.type);
          console.log(user);
        } else {
          alert('User not found!');
          this.loginForm.reset();
          console.log(res);
        }
      },
      (err) => {
        alert('Something went wrong!');
      }
    );
  }

  print() {
    this.http.get('http://localhost:9191/admin').subscribe((res) => {
      console.log(res);
    });
  }
}
