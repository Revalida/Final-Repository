import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClockService } from 'src/app/services/clock.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  clock!: Observable<Date>;

  constructor(private clockService: ClockService) { }

  ngOnInit(): void {
    this.clock = this.clockService.getClock();
  }

}
