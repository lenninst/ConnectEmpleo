import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { LoginComponent } from '../../authentication/login/login.component';

@Component({
  selector: 'app-intro-pages',
  standalone: true,
  imports: [ RouterOutlet, LoginComponent, ReactiveFormsModule],
  templateUrl: './intro-pages.component.html',
  styleUrl: './intro-pages.component.css'
})
export class IntroPagesComponent {
 profileForm: FormGroup;

  constructor(private router: Router){
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

  goJobsviwer (){
    this.router.navigate(['/jobsviwer'])
  }


}
