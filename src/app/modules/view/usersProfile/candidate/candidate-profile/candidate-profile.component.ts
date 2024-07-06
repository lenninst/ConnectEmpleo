import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Location } from '@angular/common';

import { PersonalInformationComponent } from '../Cards/personal-information/personal-information.component';
import { ContactInformationComponent } from '../Cards/contact-information/contact-information.component';
import { CapitalizePipe } from '../../../../../shared/pipes/capitalize.pipe';
import { Usuario } from '../../../../../core/interfaces/User.interface';
import { mockUser } from '../../../../../shared/mock-data/mock-user';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPen, faPlus } from '@fortawesome/free-solid-svg-icons';
import { ProfileEditModalComponent } from '../candidateModal/profile-edit-modal/profile-edit-modal.component';
import { AcademicEduComponent } from '../Cards/academic-edu/academic-edu.component';
import { WorkExperienceComponent } from '../Cards/work-experience/work-experience.component';

@Component({
  selector: 'app-candidate-profile',
  standalone: true,
  imports: [
    RouterModule,
    PersonalInformationComponent,
    ContactInformationComponent,
    CapitalizePipe,
    FontAwesomeModule,
    ProfileEditModalComponent,
    AcademicEduComponent,
    WorkExperienceComponent,
  ],
  templateUrl: './candidate-profile.component.html',
  styleUrl: './candidate-profile.component.css'
})
export class CandidateProfileComponent {
  url: string = 'https://api.dicebear.com/8.x/avataaars-neutral/svg?seed=Rascal';
  userName: string = "User name";

  faPen = faPen;
  faPlus = faPlus;


  constructor(private router: Router, private location:Location) { }
    User: Usuario = mockUser;
  goToDashboard() {
    console.log("cicl en regresar")

    this.router.navigate(['/user/mainView'])
  }

  goBack(){
    this.location.back();
  }


  showUserEditModal = false;
  openEditModal(){
    console.log("abrir modal para editar")
    this.showUserEditModal = true;
  }

  closeUserEditModal () {
    this.showUserEditModal = false;
  }

  showAddAcademicModal = false;
  AddAcademicModal (){
    this.showAddAcademicModal = true;
  }



}
