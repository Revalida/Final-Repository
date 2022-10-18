import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faculty-sidenav',
  templateUrl: './faculty-sidenav.component.html',
  styleUrls: ['./faculty-sidenav.component.scss'],
})
export class FacultySidenavComponent implements OnInit {
  closeResult: any;
  opened = false;
  constructor() {}

  ngOnInit(): void {}

  toogleSidebar() {
    this.opened = !this.opened;
  }
}
