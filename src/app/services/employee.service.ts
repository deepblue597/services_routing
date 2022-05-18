import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IEmployee } from '../employee';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string = "/assets/data/employees.json" ; 
  //  src/assets/data/employees.json
  ///assets/data/employees.json"
  
  constructor(private http: HttpClient ) { }

  getEmployee(): Observable<IEmployee[]> { 
    
    return this.http.get<IEmployee[]>(this._url)
    .pipe(catchError(this.errorHandler)); 
  }

  errorHandler(error: HttpErrorResponse){ 
    return throwError(error.message || 'server error')
  }
}
