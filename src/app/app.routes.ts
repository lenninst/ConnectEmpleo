import { Routes } from '@angular/router';

import { LoginComponent } from './modules/authentication/login/login.component';
import { AppComponent } from './app.component';


import { RegisterComponent } from './modules/authentication/register/register.component';
import { PasswordResetComponent } from './modules/authentication/password-reset/password-reset.component';

export const routes: Routes = [
  { path: "", component: AppComponent, pathMatch: "full" },
  { path: "login", component: LoginComponent, pathMatch: "full" },
  { path: "register", component: RegisterComponent, pathMatch: "full" },
  { path: "password-reset", component: PasswordResetComponent, pathMatch: "full" },
];


