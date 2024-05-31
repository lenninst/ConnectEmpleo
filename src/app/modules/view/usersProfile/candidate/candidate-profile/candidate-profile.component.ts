import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Location } from '@angular/common';

import { PersonalInformationComponent } from '../Cards/personal-information/personal-information.component';
import { ContactInformationComponent } from '../Cards/contact-information/contact-information.component';

@Component({
  selector: 'app-candidate-profile',
  standalone: true,
  imports: [RouterModule,  PersonalInformationComponent, ContactInformationComponent],
  templateUrl: './candidate-profile.component.html',
  styleUrl: './candidate-profile.component.css'
})
export class CandidateProfileComponent {
  url: string = 'https://api.dicebear.com/8.x/avataaars-neutral/svg?seed=Rascal';
  userName: string = 'nombre de de usuario';

  constructor(private router: Router, private location:Location) { }
  goToDashboard() {
    console.log("cicl en regresar")
    this.router.navigate(['/user/mainView'])
  }

  goBack(){
    this.location.back();
  }



}
