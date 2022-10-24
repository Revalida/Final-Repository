import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  clock!: Observable<Date>;
  datas: any;
  course: any;

  constructor(private http: HttpClient, private toast: ToastrService) { }

  ngOnInit(): void {

    this.course = sessionStorage.getItem('COURSE')

    this.http.get('http://localhost:9191/course/' + this.course).subscribe(
      (res) => {
        this.datas = res;

      },
      (err) => {
        this.toast.error('Something went wrong!');
      }
    );

  }

}
