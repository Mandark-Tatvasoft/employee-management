import { CommonModule } from '@angular/common';
import { routes } from './../app.routes';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  providers: [Router]
})
export class NavbarComponent {
  isHome: boolean = true;
  isEmployee: boolean = false;

  constructor(private router: Router){
    
  }

  openEmployee() {
    this.isHome = false;
    this.isEmployee = true;
    this.router.navigate(['employees']);
  }

  openHome() {
    this.isHome = true;
    this.isEmployee = false;
    this.router.navigate(['']);
  }
}
