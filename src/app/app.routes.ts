import { Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path : 'employees',
        component: EmployeeComponent
    },
    {
        path: '',
        component: HomeComponent
    }
];
