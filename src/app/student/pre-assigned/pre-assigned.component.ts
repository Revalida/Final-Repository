import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pre-assigned',
  templateUrl: './pre-assigned.component.html',
  styleUrls: ['./pre-assigned.component.scss']
})
export class PreAssignedComponent implements OnInit {
  clock!: Observable<Date>;
 
  feedback: any = {};

  constructor() {
  }

  ngOnInit() {
    this.search();
  }

  search(): void {
  
  }

  select(): void {

  }

  delete(): void {

  }
  // ngOnInit(): void {
  //   let response = this.http.get('http://localhost:9191/load');
  //   response.subscribe((data) => (this.load = data));

  // }
  
}

