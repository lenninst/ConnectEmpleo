import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { faBuilding, faFire, faSackDollar, faPerson   } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-requirements',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './requirements.component.html',
  styleUrl: './requirements.component.css'
})
export class RequirementsComponent {
  @Input() hello: string = '';
  @Input() modalidad: string = '';
  @Input() experiencia: number = 0;
  @Input() salario: number = 0;
  @Input() vacantes: number = 0;

  faBuilding = faBuilding;
  faFire = faFire;
  faSackDollar = faSackDollar;
  faPerson = faPerson;



}
