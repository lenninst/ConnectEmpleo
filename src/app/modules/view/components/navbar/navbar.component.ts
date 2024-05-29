import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass, faUser, faBell } from '@fortawesome/free-solid-svg-icons';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { UserOptionsComponent } from '../../modals/user-options/user-options.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatIconModule, FontAwesomeModule, SidebarComponent, UserOptionsComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  faMagnifyingGlass = faMagnifyingGlass;
  faUser = faUser;
  faBell = faBell;

   termino: String = "";

  search(){
    console.log("holae")
  }

  //NOTE: modal
  showUserOptionModal = false;
  openUserModal(){
    this.showUserOptionModal = true;
    console.log("abre el modal")
  }

  closeUserModal(){
    this.showUserOptionModal = false;
  }
}
