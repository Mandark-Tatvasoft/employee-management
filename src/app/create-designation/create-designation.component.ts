import { Component } from '@angular/core';
import { Designation } from '../api-handler/designations.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-designation',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-designation.component.html',
  styleUrl: './create-designation.component.css',
})
export class CreateDesignationComponent {
  designation: Designation = {
    designationId: 0,
    designationName: '',
  };
}
