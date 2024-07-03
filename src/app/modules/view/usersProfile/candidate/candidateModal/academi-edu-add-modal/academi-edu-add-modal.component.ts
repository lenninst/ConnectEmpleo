import { Component, Input } from '@angular/core';
import { FormacionAcademica } from '../../../../../../core/interfaces/User.interface';

@Component({
  selector: 'app-academi-edu-add-modal',
  standalone: true,
  imports: [],
  templateUrl: './academi-edu-add-modal.component.html',
  styleUrl: './academi-edu-add-modal.component.css'
})
export class AcademiEduAddModalComponent {


  formations: FormacionAcademica[] = [];




}
