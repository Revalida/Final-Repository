import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClockService } from 'src/app/services/clock.service';

@Component({
  selector: 'app-pre-assigned',
  templateUrl: './pre-assigned.component.html',
  styleUrls: ['./pre-assigned.component.scss']
})
export class PreAssignedComponent implements OnInit {
  clock!: Observable<Date>;
  load: any;
  
  constructor(
    private clockService: ClockService,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.clock = this.clockService.getClock();
    // let response = this.http.get('http://localhost:9191/load');
    // response.subscribe((data) => (this.load = data));
  }
  
}

