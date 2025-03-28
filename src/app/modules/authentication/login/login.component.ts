import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { first } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FieldValidationServices } from '../../../services/fieldsvalidation.services';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserService } from '../../../services/user.services';
import { UserLoginRequest } from '../../../core/interfaces/request/userLoginRequest.interface';

import { faArrowRight, faCheck, faXmark, faRotateLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatIconModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    FontAwesomeModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  faArrowRight = faArrowRight;
  faCheck = faCheck;
  faXmark = faXmark;
  faRotateLeft = faRotateLeft;

  form!: FormGroup;
  loading = false;
  submitted = false;

  loginIssucces: boolean = false;
  loginFail: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private fieldsValidation: FieldValidationServices,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],

    });
  }

  get f() { return this.form.controls }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      console.log('Formulario inválido');
      return;
    }

    this.loading = true;

    const email = this.form.get('email')?.value ?? '';
    const password = this.form.get('password')?.value ?? '';

    const userData: UserLoginRequest = {email, password};

    console.log('Iniciando sesión' , userData);

    this.userService.loginUser(userData)
      .pipe(first())
      .subscribe({
        next: () => {
          this.loginIssucces = true;

          console.log('Sesión iniciada');
          // const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/connetempleo';
          // this.router.navigateByUrl(returnUrl);
        },
        error: error => {
          console.error("No se pudo iniciar sesión ", error);
          this.loginFail = true;
          // this.alertService.error(error);
          this.loading = false;
        }
      });
  }



  getPlaceholder(controlName: string): string {
    if (this.submitted && this.f[controlName].errors) {
      if (this.f[controlName].hasError('required')) {
        switch (controlName) {
          case 'email':
            return 'Email es obligatorio';
          case 'password':
            return 'Contraseña es obligatorio';
          default:
            return `Ingresar ${controlName}`;
        }
      }

      if (controlName === 'email' && !this.validateEmail(this.f[controlName].value)) {
        return 'Email no es válido';
      }
      if (controlName === 'password' && this.f[controlName].hasError('minlength')) {
        return 'La contraseña debe tener al menos 6 caracteres';
      }
    }
    return controlName.charAt(0).toUpperCase() + controlName.slice(1); // Capitaliza el nombre del campo
  }

  validateEmail(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);

  }


  getValidationClassName(controlName: string) {

    return this.fieldsValidation.getValidationClassName(this.form, controlName, this.submitted);
  }

  goToReturn(){
    this.loginFail = false;
  }

  goToMainApp(){

    this.router.navigate(['/connectempleo'])

  }

}
