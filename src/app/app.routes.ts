import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './modules/authentication/login/login.component';

import { RegisterComponent } from './modules/authentication/register/register.component';
import { PasswordResetComponent } from './modules/authentication/password-reset/password-reset.component';
import { NgModule } from '@angular/core';
import { IntroPagesComponent } from './modules/jobsviwer/intro-pages/intro-pages.component';

export const routes: Routes = [
  { path: "", component: IntroPagesComponent, pathMatch: "full" },
  { path: "intro", component: IntroPagesComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "password-reset", component: PasswordResetComponent },
  {
    path: "jobsviwer",
    loadComponent: () => import('./modules/jobsviwer/jobs-pages/jobs-pages.component').then(c => c.JobsPagesComponent)
  },
  {
    path: "connectempleo",
    loadChildren: () => import('./modules/view/view.route').then(h => h.viewRouting),
  },

  { path: "**", redirectTo: '' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutes { }
