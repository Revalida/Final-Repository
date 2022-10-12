import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.scss'],
})
export class AdmindashboardComponent implements OnInit {
  students: any;
  closeResult: any;
  deleteId: number | undefined;
  constructor(
    private http: HttpClient,
    private modalService: NgbModal,
    private _route: Router
  ) {}

  ngOnInit(): void {
    let response = this.http.get('http://localhost:9191/student');
    response.subscribe((data) => (this.students = data));
  }
}
