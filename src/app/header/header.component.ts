import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  role = '';
  title = '';

  constructor(
    private toast: ToastrService,
    private _router: Router) {
      
    }

  ngOnInit(): void {
    this.role = JSON.stringify(sessionStorage.getItem('ROLE') || '{}');
    this.role = this.role.replace(/"/g, '');

    if (this.role === 'admin') {
      this.title = 'Admin Dashboard';
    } else if (this.role === 'faculty') {
      this.title = 'Professor Dashboard';
    } else if (this.role === 'user') {
      this.title = 'Student Dashboard';
    } else if (this.role === 'Parent') {
      this.title = 'Parent Dashboard';
    }
  }

  logout() {
    sessionStorage.clear();
    this.toast.success("Logout Successfully!");
    this._router.navigate(['/login']);
  }
}
