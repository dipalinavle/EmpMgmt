import { Injectable } from '@angular/core';
import { EmployeeData } from './employee-entry';
import { Observable, throwError } from 'rxjs';
import {catchError , retry} from 'rxjs/operators';
import {HttpClient , HttpHeaders , HttpErrorResponse}  from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {
  private employeeRestUrl='http://localhost:8000/api/employee';
  private httpOptions={
    headers:new HttpHeaders({'Content-Type':'application/json'})
  }
  constructor(private httpClient : HttpClient) { }
  /***Get Employee Data** */
  getEmployeeData():Observable<EmployeeData[]>{
    return this.httpClient.get<EmployeeData[]>(this.employeeRestUrl , this.httpOptions).pipe(retry(3),catchError(this.httpErrorHandler));

  }
    /***Get Employee Data as per the employee id** */
    getEmployeeDataById(id:number):Observable<EmployeeData>{
      return this.httpClient.get<EmployeeData>(this.employeeRestUrl+"/"+id , this.httpOptions).pipe(retry(3),catchError(this.httpErrorHandler));
  
    }
     /***Insert data into employee DB** */
     addEmployeeData(employeeData:EmployeeData):Observable<EmployeeData>{
      return this.httpClient.post<EmployeeData>(this.employeeRestUrl , employeeData, this.httpOptions).pipe(retry(3),catchError(this.httpErrorHandler));
  
    } 
       /***Update data into employee DB** */
       updateEmployeeData(employeeData:EmployeeData):Observable<EmployeeData>{
        return this.httpClient.put<EmployeeData>(this.employeeRestUrl+"/"+employeeData.id , employeeData, this.httpOptions).pipe(retry(3),catchError(this.httpErrorHandler));
    
      } 
       /***Delete data into employee DB** */
       deleteEmployeeData(employeeData:EmployeeData | number):Observable<EmployeeData>{
         const id= typeof employeeData == 'number' ? employeeData : employeeData.id;
        return this.httpClient.delete<EmployeeData>(this.employeeRestUrl+"/"+id , this.httpOptions).pipe(retry(3),catchError(this.httpErrorHandler));
    
      } 
  private httpErrorHandler(error:HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.error("A client side error occurs. The errors msg is "+ error.message);
    }
    else{
      console.error("An Error occured in server and Http error status code is "+error.status + "an the returned is "+error.message);
    }
    return throwError("Error occurred. Please try again ");
  }
}
