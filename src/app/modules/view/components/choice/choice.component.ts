import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash , faMugHot, faEllipsis} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-choice',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './choice.component.html',
  styleUrl: './choice.component.css'
})
export class ChoiceComponent {
  faTrash = faTrash;
  faMugHot = faMugHot;
  faEllipsis = faEllipsis;

}
