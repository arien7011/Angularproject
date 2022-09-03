import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { profile } from './practice/Profile';
import { catchError } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpclient:HttpClient) { }
 private  url:string="../../../../assets/json/data.json"
  getEmployee():Observable<profile[]>{
    return this.httpclient.get<profile[]>(this.url).pipe(catchError(this.errorHandler))
}

errorHandler(error:HttpErrorResponse){
  return throwError(error.message ||"server error")
}

}