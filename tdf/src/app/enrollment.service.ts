import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  url : string = 'https://m36wk.wiremockapi.cloud/enrol';
  constructor(private http : HttpClient) { }

  enroll(user : User){
    console.log(JSON.stringify(user));
    return this.http.post(this.url,user)
            .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse): Observable<any> {
    return throwError(() => new Error(error.message || "server error"));
  }
}
