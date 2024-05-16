import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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

  profileForm: FormGroup;

  constructor(){
    this.profileForm = new FormGroup({
      email: new FormControl(''),
      message: new FormControl(''),
    });
  }
  ngOnInit(){

  }

  submitApplication(){
    const email = this.profileForm.value.email || '';
    const message = this.profileForm.value.message || '';
    console.warn(this.profileForm.value)
  }
}
