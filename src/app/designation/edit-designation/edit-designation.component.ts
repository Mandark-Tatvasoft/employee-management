import { Component, OnInit } from '@angular/core';
import {
  Designation,
  DesignationsService,
} from '../services/designations.service';
import { ActivatedRoute, Params } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-designation',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-designation.component.html',
  styleUrl: './edit-designation.component.css',
})
export class EditDesignationComponent implements OnInit {
  constructor(
    private designationService: DesignationsService,
    private route: ActivatedRoute
  ) {}

  designation: Designation = {
    designationId: 0,
    designationName: '',
  };
  id: number = 0;

  ngOnInit() {
    this.route.params.subscribe((params: Params) => (this.id = params['id']));
    this.designationService
      .getDesignation(
        'https://localhost:7196/Designations/GetDesignation?id=' + this.id
      )
      .subscribe((data) => {
        this.designation = data;
      });
  }

  editDesignation() {
    this.designationService.editDesignation(
      'https://localhost:7196/Designations/EditDesignation',
      this.designation
    );
  }
}
