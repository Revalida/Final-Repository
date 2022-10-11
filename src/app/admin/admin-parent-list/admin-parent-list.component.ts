import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-parent-list',
  templateUrl: './admin-parent-list.component.html',
  styleUrls: ['./admin-parent-list.component.scss'],
})
export class AdminParentListComponent implements OnInit {
  parent: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    let response = this.http.get('http://localhost:9191/parent');
    response.subscribe((data) => (this.parent = data));
  }
}
