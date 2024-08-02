import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { faLocationDot, faHeart, faBan} from '@fortawesome/free-solid-svg-icons';
import { DetailsComponent } from './details/details.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { Empresa } from '../../../../core/interfaces/ofertas.interface';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [MatIconModule, FontAwesomeModule, RouterModule, DetailsComponent, RequirementsComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  faLocationDot = faLocationDot;
  faHeart = faHeart;
  faBan = faBan;


}
