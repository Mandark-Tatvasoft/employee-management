import { Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { DesignationComponent } from './designation/designation.component';
import { CreateDesignationComponent } from './create-designation/create-designation.component';

export const routes: Routes = [
  {
    path: 'employees',
    component: EmployeeComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'addEmployee',
    component: CreateEmployeeComponent,
  },
  {
    path: 'editEmployee/:id',
    component: EditEmployeeComponent,
  },
  {
    path: 'designations',
    component: DesignationComponent,
  },
  {
    path: 'addDesignation',
    component: CreateDesignationComponent,
  },
];
