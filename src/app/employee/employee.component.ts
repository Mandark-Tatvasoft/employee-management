import { Component, OnInit } from '@angular/core';
import { Employee, EmployeesService } from '../api-handler/employees.service';
import { url } from 'inspector';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit{
  constructor(private employee: EmployeesService){};
  url = 'https://localhost:7196/Employees/GetAllEmployees';
  response: Employee[] = [] ;
  ngOnInit() {
    
    this.employee.getData(this.url).subscribe(data => {
      this.response = data
      console.log(this.response)
    });
  }
}
