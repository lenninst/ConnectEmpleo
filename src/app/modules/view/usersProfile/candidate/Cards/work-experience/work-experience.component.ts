import { Component } from '@angular/core';
import { Usuario } from '../../../../../../core/interfaces/User.interface';
import { mockUser } from '../../../../../../shared/mock-data/mock-user';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent {
  //icons
  faPen = faPen;
  faTrash = faTrash;

  saludar() {
    console.log("hello")
  }

  user: Usuario = mockUser;

}
