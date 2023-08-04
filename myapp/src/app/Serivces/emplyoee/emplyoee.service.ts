import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Emplyoee } from './emplyoee';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn : 'root'
})
export class EmplyoeeService {

  private _url : string = "https://m36wk.wiremockapi.cloud/getEmplyoees";
  constructor(private http : HttpClient) { }

  getEmplyoees() : Observable<Emplyoee[]>{
    return this.http.get<Emplyoee[]>(this._url)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  errorHandler(error: HttpErrorResponse): Observable<any> {
    return throwError(() => new Error(error.message || "server error"));
  }
}
