import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { mockUser } from '../../../../shared/mock-data/mock-user';
import { Usuario } from '../../../../core/interfaces/User.interface';
import { StatusIconPipe } from '../../../../shared/pipes/status-icon.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEllipsis, faHeartCrack } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-saved',
  standalone: true,
  imports: [RouterModule, StatusIconPipe, FontAwesomeModule],
  templateUrl: './saved.component.html',
  styleUrl: './saved.component.css'
})
export class SavedComponent {
  user : Usuario = mockUser;

  faEllipsis = faEllipsis;
  faHeartCrack = faHeartCrack;


}
