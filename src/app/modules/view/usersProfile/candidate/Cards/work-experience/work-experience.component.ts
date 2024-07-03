import { Component } from '@angular/core';
import { Usuario } from '../../../../../../core/interfaces/User.interface';
import { mockUser } from '../../../../../../shared/mock-data/mock-user';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent {
   saludar(){
    console.log("hello")
  }

  user :Usuario = mockUser;

}
