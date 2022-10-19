import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pre-assigned',
  templateUrl: './pre-assigned.component.html',
  styleUrls: ['./pre-assigned.component.scss']
})
export class PreAssignedComponent implements OnInit {
  load: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    let response = this.http.get('http://localhost:9191/load');
    response.subscribe((data) => (this.load = data));
  }
  
}

