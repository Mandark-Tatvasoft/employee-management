import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export interface Employee {
  id: number;
  firstname: string;
  lastname: string;
  designation: number;
  salary: number;
}
@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  constructor(private http: HttpClient) {}

  getData(apiUrl: string) {
    return this.http.get<Employee[]>(apiUrl);
  }

  deleteEmployee(url: string) {
    return this.http.delete(url).subscribe();
  }

  addEmployee(url: string, employee: Employee) {
    return this.http.post(url, employee).subscribe();
  }

  getEmployee(url: string) {
    return this.http.get<Employee>(url);
  }

  editEmployee(url: string, employee: Employee) {
    return this.http.put(url, employee).subscribe();
  }
}
