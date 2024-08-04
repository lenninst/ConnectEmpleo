import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { faMagnifyingGlass, faUser, faBell } from '@fortawesome/free-solid-svg-icons';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { UserOptionsComponent } from '../../modals/user-options/user-options.component';
import { SharedService } from '../../../../services/Shared.Service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatIconModule, FontAwesomeModule, SidebarComponent, UserOptionsComponent, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  faMagnifyingGlass = faMagnifyingGlass;
  faUser = faUser;
  faBell = faBell;

  termino: string = "";

  constructor(private sharedService: SharedService){}

  search() {
    this.sharedService.setSearchTerm(this.termino)
  }

  //NOTE: modal
  showUserOptionModal = false;
  openUserModal() {
    this.showUserOptionModal = true;
    console.log("abre el modal")
  }

  closeUserModal() {
    this.showUserOptionModal = false;
  }
}
