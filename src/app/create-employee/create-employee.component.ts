import { Component, OnInit } from '@angular/core';
import {
  Designation,
  DesignationsService,
} from '../api-handler/designations.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { Employee, EmployeesService } from '../api-handler/employees.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css',
})
export class CreateEmployeeComponent implements OnInit {
  url = 'https://localhost:7196/Designations';

  designations: Designation[] = [];

  employee: Employee = {
    id: 0,
    firstname: '',
    lastname: '',
    designation: 0,
    salary: 0,
  };

  constructor(
    private designationService: DesignationsService,
    private employeeService: EmployeesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.designationService
      .getDesignations(this.url + '/GetAllDesignations')
      .subscribe((data) => {
        this.designations = data;
      });
  }

  addEmployee() {
    this.employeeService.addEmployee(
      'https://localhost:7196/Employees/AddEmployee',
      this.employee
    );
    this.router.navigate(['employees']);
  }
}
