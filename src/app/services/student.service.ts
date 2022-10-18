import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  studentNo: string = "";

  constructor(private http: HttpClient) {
    // const userInfo = localStorage.getItem("user")
    // if(userInfo){
    //   this.studentID = JSON.parse(JSON.parse(JSON.stringify(userInfo))).user?.id?? JSON.parse(JSON.parse(JSON.stringify(userInfo))).id
    // }

   }
  //  getStudentCred = (data = this.studentNo) => {
    getStudentCred = (data = this.studentNo): Observable<any> => {
    return this.http.get<any>('http://localhost:9191/student').pipe(
      tap(x => x)
    )
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
