import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss']
})
export class GradesComponent implements OnInit {
  studentNo = '';
  datas: any;

  constructor() { }

  ngOnInit(): void {

  }

}
