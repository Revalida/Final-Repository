import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as $ from 'jquery'

@Component({
  selector: 'app-studentdashboard',
  templateUrl: './studentdashboard.component.html',
  styleUrls: ['./studentdashboard.component.scss']
})
export class StudentdashboardComponent implements OnInit {

  loggedUser = '';
  currRole = '';
  courses : Observable<any[]> | undefined;
  enrollments : Observable<any[]> | undefined;
  enrollmentcount : Observable<any[]> | undefined;
  wishlist : Observable<any[]> | undefined;
  chapters : Observable<any[]> | undefined;
  
  constructor() {}

  ngOnInit(): void 
  {

    this.loggedUser = JSON.stringify(sessionStorage.getItem('loggedUser')|| '{}');
    this.loggedUser = this.loggedUser.replace(/"/g, '');

    this.currRole = JSON.stringify(sessionStorage.getItem('ROLE')|| '{}'); 
    this.currRole = this.currRole.replace(/"/g, '');

    $("#btn").click(function(){
      $(".sidebar").toggleClass("open");
      menuBtnChange();
    });
    
    $(".bx-search").click(function(){ 
      $(".sidebar").toggleClass("open");
      menuBtnChange(); 
    });
    
    function menuBtnChange() {
     if($(".sidebar").hasClass("open")){
      $("#btn").removeClass("fa-bars").addClass("fa-ellipsis-v");
     }else {
      $("#btn").removeClass("fa-ellipsis-v").addClass("fa-bars");
     }
    }

  }

}
