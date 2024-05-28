import { Component, OnInit } from '@angular/core';
import { Employee, EmployeesService } from '../api-handler/employees.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent implements OnInit {
  constructor(private employee: EmployeesService, private router: Router) {}
  url = 'https://localhost:7196/Employees';
  response: Employee[] = [];
  ngOnInit() {
    this.employee.getData(this.url + '/GetAllEmployees').subscribe((data) => {
      this.response = data;
    });
  }

  deleteEmployee(id: number) {
    this.employee.deleteEmployee(this.url + '/DeleteEmployee?id=' + id);
    window.location.reload();
  }

  addEmployee() {
    this.router.navigate(['addEmployee']);
  }

  editEmployee(id: number) {
    this.router.navigate(['editEmployee', (id = id)]);
  }
}
