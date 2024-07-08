import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormacionAcademica } from '../../../../../../core/interfaces/User.interface';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FieldValidationServices } from '../../../../../../services/fieldsvalidation.services';
import { CommonModule } from '@angular/common';

import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-academi-edu-add-modal',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CalendarModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './academi-edu-add-modal.component.html',
  styleUrl: './academi-edu-add-modal.component.css'
})
export class AcademiEduAddModalComponent {

  formations: FormacionAcademica[] = [];

  form!: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private fieldsValidation: FieldValidationServices,
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      titulo: new FormControl('', Validators.required),
      universidad: new FormControl('', Validators.required),
      pais: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required),
      inicialDate: new FormControl<Date | null>(null),
      endDate: new FormControl<Date | null>(null),
    })
  }

  get f() {
    return this.form.controls
  }

  onSubmit() {
    console.log("enviar formulario");
    this.submitted = true;
    console.log(this.form.value);
  }

  getValidationClassName(controlName: string) {
    return this.fieldsValidation.getValidationClassName(this.form, controlName, this.submitted);
  }

  getPlaceholder(controlName: string): string {
    return this.fieldsValidation.getPlaceholder(this.form, controlName, this.submitted);
  }


}
