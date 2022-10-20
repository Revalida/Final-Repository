import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClockService } from 'src/app/services/clock.service';

@Component({
  selector: 'app-student-sidenav',
  templateUrl: './student-sidenav.component.html',
  styleUrls: ['./student-sidenav.component.scss']
})
export class StudentSidenavComponent implements OnInit {

  clock!: Observable<Date>;

  constructor(private clockService: ClockService) { }

  ngOnInit(): void {
    this.clock = this.clockService.getClock();
  }

}
