import { Component } from '@angular/core';
import { Usuario } from '../../../../../../core/interfaces/User.interface';
import { mockUser } from '../../../../../../shared/mock-data/mock-user';

@Component({
  selector: 'app-academic-edu',
  standalone: true,
  imports: [],
  templateUrl: './academic-edu.component.html',
  styleUrl: './academic-edu.component.css'
})
export class AcademicEduComponent {
  users: Usuario = mockUser;

  ngOnInit() {
  }

}
