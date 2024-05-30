import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  Designation,
  DesignationsService,
} from '../services/designations.service';
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
    this.router.navigate(['designations/create-designation']);
  }

  editDesignation(id: number) {
    this.router.navigate(['designations/edit-designation', id]);
  }
}
