import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  studentID: string = "";
  constructor(private http: HttpClient) {
    const userInfo = localStorage.getItem("user")
    if(userInfo){
      this.studentID = JSON.parse(JSON.parse(JSON.stringify(userInfo))).user?.id?? JSON.parse(JSON.parse(JSON.stringify(userInfo))).id
    }
   }
   getStudentCred = (data = this.studentID) => {
  //  getStudentCred = (data = this.studentID): Observable<any> => {
    // return this.http.get(`${environment.url}/users/${data}`).pipe(
    //   tap(x => x)
    // )
  }

  // updateStudentInfo = (data: Student) => {
    updateStudentInfo = () => {
    // console.log(data)
    // return this.http.patch(`${environment.url}/users/${data.id?? this.studentID}`, data).pipe(
    //   catchError(err => {
    //     this.error(err.error)
    //     return of(err)
    //   }),
    // )
  }
}
