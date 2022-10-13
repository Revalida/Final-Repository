import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.scss'],
})
export class FacultyComponent implements OnInit {
  opened = false;

  constructor() {}

  ngOnInit(): void {}

  toogleSidebar() {
    this.opened = !this.opened;
  }
}
