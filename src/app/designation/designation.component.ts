import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  Designation,
  DesignationsService,
} from '../api-handler/designations.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css',
})
export class DesignationComponent implements OnInit {
  response!: Designation[];

  constructor(
    private router: Router,
    private designationService: DesignationsService
  ) {}

  ngOnInit() {
    this.designationService
      .getDesignations('https://localhost:7196/Designations/GetAllDesignations')
      .subscribe((data) => {
        this.response = data;
      });
  }

  addDesignation() {
    this.router.navigate(['addDesignation']);
  }
}
