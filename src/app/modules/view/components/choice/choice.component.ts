import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Usuario } from '../../../../core/interfaces/User.interface';
import { mockUser } from '../../../../shared/mock-data/mock-user';
import { StatusIconPipe } from '../../../../shared/pipes/status-icon.pipe';
import { CandidatoData, Postulacion } from '../../../../core/interfaces/response/candidatoResponse.interface';
import { CandidatoService } from '../../../../services/candidato.services';

import { faTrash , faMugHot, faEllipsis} from '@fortawesome/free-solid-svg-icons';
import { PostulacionService } from '../../../../services/postulacion.services';
import { PostulacionDeleteResponse } from '../../../../core/interfaces/response/postulacionResponse.interface';

@Component({
  selector: 'app-choice',
  standalone: true,
  imports: [FontAwesomeModule, StatusIconPipe],
  templateUrl: './choice.component.html',
  styleUrl: './choice.component.css'
})
export class ChoiceComponent implements OnInit{
  faTrash = faTrash;
  faMugHot = faMugHot;
  faEllipsis = faEllipsis;

  user :  Usuario = mockUser;

 postulaciones: Postulacion [] = [];
  selectedPostulacion: Postulacion | null = null;

  constructor(private candidatoService: CandidatoService, private postulacionService: PostulacionService){}

  ngOnInit(): void {
    this.candidatoService.fetchCandidatoByLoggedInUser();

    this.candidatoService.candidato$.subscribe(
      (candidato: CandidatoData | null) => {
        if (candidato) {
          this.postulaciones = candidato.postulaciones;
        } else {
          this.postulaciones = [];
        }
      }
    );
  }

  deletePostulacion(postulacion: Postulacion ): void {

    console.log('Postulación:', postulacion);

    this.selectedPostulacion = postulacion;
    let id = this.selectedPostulacion.id
    console.log('Id de postulacion es : ', id)

    this.postulacionService.deletePostulacion(id).subscribe(
      (response: PostulacionDeleteResponse) => {
        if(response.isSuccess){
          alert('Postulacion eliminda con exito');
        }else {
          alert(`Error: ${response.message}`);
        }
      },
      (error) =>{
        console.log("error al eliminar la postulacion", error);
      }
    )
  }
}
