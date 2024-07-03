import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { PasswordResetComponent } from "./password-reset/password-reset.component";

export const routes: Routes = [
  { path: '', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'passRecover', component: PasswordResetComponent},


]

@NgModule({
  imports: [],
  exports: []
})

export class authRouting{}
