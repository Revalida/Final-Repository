import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClockService } from 'src/app/services/clock.service';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss']
})
export class GradesComponent implements OnInit {
  clock!: Observable<Date>;

  constructor(private clockService: ClockService) { }

  ngOnInit(): void {
    this.clock = this.clockService.getClock();
  }

}
