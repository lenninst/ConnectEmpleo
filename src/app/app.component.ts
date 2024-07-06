import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { LoginComponent } from './modules/authentication/login/login.component';


import { FormGroup,  FormControl , ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'connectEmpleo';

 }
