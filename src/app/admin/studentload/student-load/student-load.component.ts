import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-student-load',
  templateUrl: './student-load.component.html',
  styleUrls: ['./student-load.component.scss'],
})
export class StudentLoadComponent implements OnInit {
  constructor(private http: HttpClient, private modalService: NgbModal) {}

  ngOnInit(): void {}
}
