import { Component, Input } from '@angular/core';
import { RequirementsComponent } from "../requirements/requirements.component";

@Component({
  selector: 'app-details',
  standalone: true,
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
  imports: [RequirementsComponent]
})
export class DetailsComponent {
  @Input() details: string = '';
  @Input() titulo: string = '';
  @Input() fecha: Date | null = null;
  @Input() ubicacion: string = '';
  @Input() hello: string = '';
  @Input() modalidad: string = '';
  @Input() experiencia: number = 0;
  @Input() salario: number = 0;
  @Input() vacantes: number = 0;
  @Input() link:string = '';

}
