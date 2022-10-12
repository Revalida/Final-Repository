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
  showAdmin = false;
  showUser = true;
  showProf = false;
  type = '';

  loginForm!: FormGroup;

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
    this.type = 'student';
    console.log(this.type);
  }

  showAdminButton() {
    this.showAdmin = true;
    this.showUser = false;
    this.showProf = false;
  }

  showProfButton() {
    this.showAdmin = false;
    this.showUser = false;
    this.showProf = true;
  }

  login() {
    const cartName = this.loginForm.value.username;
    const cartPassword = this.loginForm.value.password;
    this.http.get<any>('http://localhost:9191/student').subscribe(
      (res) => {
        const user = res.find((a: any) => {
          return (
            a.studNo === this.loginForm.value.username &&
            a.password === this.loginForm.value.password
          );
        });
        if (user) {
          this.loginForm.reset();
          this._router.navigate(['studentdashboard']);
          sessionStorage.setItem('USER', 'user');
          sessionStorage.setItem('ROLE', 'user');
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
    const cartName = this.loginForm.value.username;
    const cartPassword = this.loginForm.value.password;
    this.http.get<any>('http://localhost:9191/professor').subscribe(
      (res) => {
        const user = res.find((a: any) => {
          return (
            a.facultyNo === this.loginForm.value.username &&
            a.password === this.loginForm.value.password
          );
        });
        if (user) {
          this.loginForm.reset();
          this._router.navigate(['studentdashboard']);
          sessionStorage.setItem('USER', 'user');
          sessionStorage.setItem('ROLE', 'professor');
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
    if (
      this._service.adminLoginFromRemote(this.adminEmail, this.adminPassword)
    ) {
      sessionStorage.setItem('loggedUser', this.adminEmail);
      sessionStorage.setItem('USER', 'admin');
      sessionStorage.setItem('ROLE', 'admin');
      sessionStorage.setItem('name', 'admin');
      sessionStorage.setItem('gender', 'male');
      this._router.navigate(['/admindashboard']);
    } else {
      console.log('Exception Occured');
      this.msg = 'Bad admin credentials !!!';
    }
    console.log(sessionStorage.getItem('TOKEN'));
  }
}
