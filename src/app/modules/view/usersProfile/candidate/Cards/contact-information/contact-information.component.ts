import { Component } from '@angular/core';
import { Usuario } from '../../../../../../core/interfaces/User.interface';
import { mockUser } from '../../../../../../shared/mock-data/mock-user';

@Component({
  selector: 'app-contact-information',
  standalone: true,
  imports: [],
  templateUrl: './contact-information.component.html',
  styleUrl: './contact-information.component.css'
})
export class ContactInformationComponent {
  User: Usuario = mockUser;
}
