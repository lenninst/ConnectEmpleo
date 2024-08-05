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
import { AcademiEduAddModalComponent } from '../candidateModal/academi-edu-add-modal/academi-edu-add-modal.component';
import { CandidatoService } from '../../../../../services/candidato.services';
import { CandidatoData } from '../../../../../core/interfaces/response/candidatoResponse.interface';

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
    AcademiEduAddModalComponent
  ],
  templateUrl: './candidate-profile.component.html',
  styleUrl: './candidate-profile.component.css'
})
export class CandidateProfileComponent {
  url: string = 'https://api.dicebear.com/8.x/avataaars-neutral/svg?seed=Rascal';
  userName: string = "User name";

  faPen = faPen;
  faPlus = faPlus;

  User: Usuario = mockUser;
  candidatoData: CandidatoData | null = null;
  error: string | null = null;

  constructor(
    private router: Router,
    private location: Location,
    private candidatoService: CandidatoService
  ) { }


  ngOnInit() {
    this.loadCandidatoData();
  }

  loadCandidatoData() {
    const userFk = this.candidatoService.getUserFk();
    if (userFk) {
      this.candidatoService.fetchCandidatoByFk(userFk).subscribe({
        next: (response) => {
          if (response.isSuccess) {
            this.candidatoData = response.data;
          } else {
            this.error = 'No se pudo cargar informacion del candidato';
          }
        },
        error: (err) => {
          console.log('Error el acragra todos los datos', err);
          this.error = 'Ocurrio un error al cargar los datos';
        }
      });
    } else {
      this.error = 'No se encontro el Id de usurio';
    }

  }

  goToDashboard() {
    console.log("cicl en regresar")

    this.router.navigate(['/user/mainView'])
  }

  goBack() {
    this.location.back();
  }

  showUserEditModal = false;
  openEditModal() {
    console.log("abrir modal para editar")
    this.showUserEditModal = true;
  }

  closeUserEditModal() {
    this.showUserEditModal = false;
  }

  showAddAcademicModal = false;
  AddAcademicModal() {
    console.log("abrir modal para agregar academicos")
    this.showAddAcademicModal = true;
  }





}
