import { Component, Input } from '@angular/core';
import { CandidatoData } from '../../../../../../core/interfaces/response/candidatoResponse.interface';

@Component({
  selector: 'app-contact-information',
  standalone: true,
  imports: [],
  templateUrl: './contact-information.component.html',
  styleUrl: './contact-information.component.css'
})
export class ContactInformationComponent {
  @Input() datos!: CandidatoData;
}
