import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { first } from 'rxjs';
import { FieldValidationServices } from '../../../services/fieldsvalidation.services';
import { UserService } from '../../../services/user.services';

import { faArrowRight, faCheck, faXmark, faRotateLeft } from '@fortawesome/free-solid-svg-icons';

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
  faCheck = faCheck;
  faXmark = faXmark;
  faRotateLeft = faRotateLeft;

  termsAccepted: boolean = false;
  asyncValidator: any | string;
  registerIssucces: boolean = false;
  registerFail: boolean = false;

  form!: FormGroup;
  submitted: boolean = false;
  loading: boolean = false;
  userTypes = [
    { value: 'empleado', label: 'Empleado' },
    { value: 'CANDIDATO', label: 'CANDIDATO' },

  ];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private fieldsValidation: FieldValidationServices,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      userName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required, Validators.minLength(6), [this.asyncValidator]],
      termsAccepted: [false, Validators.requiredTrue],
      userType: ['', Validators.required]
    });
  }

  get fieldsValidator(): { [K in keyof FormModel]: AbstractControl } {
    return this.form.controls as { [K in keyof FormModel]: AbstractControl };
  }

  get f() {
    return this.form.controls;

  }

  onSubmit() {
    this.submitted = true;

    if(this.form.invalid){
      return console.log("error al enviar formulario", this.form.value);
    }

    if (this.form.invalid) {
      return console.log("Error: no se envió el formulario");
    }

    if (this.form.get('termsAccepted')?.value) {
      console.log("Acepto los términos");
    } else {
      console.log("No se aceptaron los términos");
      return;
    }

    this.loading = true;

    this.userService.registerUser(this.form.value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.registerIssucces = true;
        },
        error: error => {
          this.loading = false;
          this.registerFail = true;
          console.error('Error al registrar el usuario', error);
        }
      });

    console.log("Se envió el formulario");
    console.log(this.form.value);
  }

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
  return controlName.charAt(0).toUpperCase() + controlName.slice(1);
}

termsAcceptedChecked(): boolean {
  return this.form.get('termsAccepted')?.value === true;
}

getClasses(controlName: string) {
  return this.fieldsValidation.getValidationClassName(this.form, controlName, this.submitted);
}

  goToLogin(){
    this.router.navigate(['/login'])
  }

  goToReturn(){
    this.registerFail = false;
  }
}


