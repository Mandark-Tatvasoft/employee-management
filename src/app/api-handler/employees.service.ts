import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Employee {
  "id": number,
  "firstname" : string,
  "lastname" : string,
  "designation": number,
  "salary": number
}
@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient) {}

  getData(apiUrl: string) {
    return this.http.get<Employee[]>(apiUrl)
  }
}
