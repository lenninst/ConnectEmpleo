import { Component, Input } from '@angular/core';
import { CandidatoData } from '../../../../../../core/interfaces/response/candidatoResponse.interface';

@Component({
  selector: 'app-personal-information',
  standalone: true,
  imports: [],
  templateUrl: './personal-information.component.html',
  styleUrl: './personal-information.component.css'
})
export class PersonalInformationComponent {

  @Input() datos!: CandidatoData;

  constructor(){}
}
