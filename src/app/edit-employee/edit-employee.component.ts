import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {
  Designation,
  DesignationsService,
} from '../api-handler/designations.service';
import { Employee, EmployeesService } from '../api-handler/employees.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-employee',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.css',
})
export class EditEmployeeComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private designation: DesignationsService,
    private employeeService: EmployeesService,
    private router: Router
  ) {}

  designations: Designation[] = [];
  id: number = 0;
  employee: Employee = {
    id: 0,
    firstname: '',
    lastname: '',
    designation: 0,
    salary: 0,
  };

  ngOnInit() {
    this.route.params.subscribe((params: Params) => (this.id = params['id']));

    this.designation
      .getDesignations('https://localhost:7196/Designations/GetAllDesignations')
      .subscribe((data) => {
        this.designations = data;
      });

    this.employeeService
      .getEmployee('https://localhost:7196/Employees/GetEmployee?id=' + this.id)
      .subscribe((data) => {
        this.employee = data;
      });
  }

  editEmployee() {
    this.employeeService.editEmployee(
      'https://localhost:7196/Employees/UpdateEmployeeDetails',
      this.employee
    );
    this.router.navigate(['employees']);
  }
}
