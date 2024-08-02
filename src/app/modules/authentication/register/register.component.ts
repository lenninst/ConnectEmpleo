/**
 * @module
 */
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { AccountService } from '../../../services/account.service';
import { first } from 'rxjs';
import { FieldValidationServices } from '../../../services/fieldsvalidation.services';

interface FormModel {
  userName: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    MatIconModule,
    RouterModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  faArrowRight = faArrowRight;

  termsAccepted: boolean = false;
  asyncValidator: any | string;

  form!: FormGroup;
  submitted: boolean = false;
  loading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private fieldsValidation: FieldValidationServices,
    // private alertService: AlertService,
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      userName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required, Validators.minLength(6), [this.asyncValidator]],
      termsAccepted: [false, Validators.requiredTrue]

    });
  }

  /**
   * obtener validadores
   * @returns {[K in keyof FormModel]: AbstractControl}
   */
  get fieldsValidator(): { [K in keyof FormModel]: AbstractControl } {
    return this.form.controls as { [K in keyof FormModel]: AbstractControl };
  }

  /**
  * @returns {AbstractControl}
   */
  get f() {
    return this.form.controls;

  }

  /**
   * envio de formulario
   */
  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return console.log("Eror: no se envio el formulario");
    }

    if (this.form.get('termsAccepted')?.value) {
      console.log("Acepto los terminao");
    } else {
      console.log("no se acepto los termino")
    }

    this.loading = true;

    // this.alertService.clear();

    if (this.form.invalid) {
      return console.log("Eror: no se envio el formulario");
    }

    this.loading = true;

    this.accountService.register(this.form.value)
      .pipe(first())
      .subscribe({
        next: () => {
          // Acción después de que el registro sea exitoso
          this.router.navigate(['/login'], { relativeTo: this.route });
        },
        error: error => {
          // Manejo de errores durante el registro
          this.loading = false; // Detener el indicador de carga
        }
      });

    console.log("se envio el formulario ");
    console.log(this.form.value);


  }

  /**
  * Validar campos
   * @param controlName - nombre del campo
   * @returns {string} - placeholder
  * @returns {string} - mensaje de error
   * @returns
   */
  getPlaceholder(controlName: string): string {
    if (this.submitted && this.f[controlName].errors) {
      if (this.f[controlName].hasError('required')) {
        switch (controlName) {
          case 'userName':
            return 'Usuario es obligatorio';
          case 'email':
            return 'Email es obligatorio';
          case 'password':
            return 'Contraseña es obligatorio';
          default:
            return `Ingresar ${controlName}`;
        }
      }

      if (controlName === 'email' && !this.fieldsValidation.validateEmail(this.f[controlName].value)) {
        return 'Email no es válido';
      }
      if (controlName === 'password' && this.f[controlName].hasError('minlength')) {
        return 'La contraseña debe tener al menos 6 caracteres';
      }
    }
    return controlName.charAt(0).toUpperCase() + controlName.slice(1); // Capitaliza el nombre del campo
  }

  termsAcceptedChecked(): boolean {
    return this.form.get('termsAccepted')?.value === true;
  }

  /**
  * Obtener clases dinamicas
   * @param controlName - nombre del campo
   * @returns
   */
  getClasses(controlName: string) {
    return this.fieldsValidation.getValidationClassName(this.form, controlName, this.submitted);
  };


}


