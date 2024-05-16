import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './modules/authentication/login/login.component';
import { JobsPagesComponent } from './modules/jobsviwer/jobs-pages/jobs-pages.component';


import { RegisterComponent } from './modules/authentication/register/register.component';
import { PasswordResetComponent } from './modules/authentication/password-reset/password-reset.component';
import { NgModule } from '@angular/core';
import { IntroPagesComponent } from './modules/jobsviwer/intro-pages/intro-pages.component';

export const routes: Routes = [
  { path: "", component: IntroPagesComponent, pathMatch: "full" },
  { path: "intro", component: IntroPagesComponent},
  { path: "login", component: LoginComponent},
  { path: "register", component: RegisterComponent},
  { path: "password-reset", component: PasswordResetComponent},
  { path: "jobsviwer", component: JobsPagesComponent},
  {path: "**", redirectTo: ''},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutes {}
