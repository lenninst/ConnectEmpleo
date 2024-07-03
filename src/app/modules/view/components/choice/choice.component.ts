import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash , faMugHot, faEllipsis} from '@fortawesome/free-solid-svg-icons';
import { Usuario } from '../../../../core/interfaces/User.interface';
import { mockUser } from '../../../../shared/mock-data/mock-user';
import { StatusIconPipe } from '../../../../shared/pipes/status-icon.pipe';

@Component({
  selector: 'app-choice',
  standalone: true,
  imports: [FontAwesomeModule, StatusIconPipe],
  templateUrl: './choice.component.html',
  styleUrl: './choice.component.css'
})
export class ChoiceComponent {
  faTrash = faTrash;
  faMugHot = faMugHot;
  faEllipsis = faEllipsis;

  user :  Usuario = mockUser;

}
