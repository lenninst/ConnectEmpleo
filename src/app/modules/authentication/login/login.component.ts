import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AccountService } from '../../../services/account.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatIconModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  form!: FormGroup;
  loading = false;
  submitted = false;


  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],

    });
  }

  get f() { return this.form.controls }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    this.accountService.login(f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe({
        next: () => {
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          this.router.navigateByUrl(returnUrl);
        },
        error: error => {
          // this.alertService.error(error);
          this.loading = false;
        }
      })
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


}
