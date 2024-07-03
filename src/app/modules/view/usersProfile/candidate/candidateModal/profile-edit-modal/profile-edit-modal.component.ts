import { Component, Output, EventEmitter } from '@angular/core';
import { Usuario } from '../../../../../../core/interfaces/User.interface';
import { mockUser } from '../../../../../../shared/mock-data/mock-user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile-edit-modal',
  standalone: true,
  imports: [ FormsModule,],
  templateUrl: './profile-edit-modal.component.html',
  styleUrl: './profile-edit-modal.component.css'
})
export class ProfileEditModalComponent {

  User: Usuario = mockUser;

  selectedGender: string = this.User.genero;

  @Output() closeUserEditModal = new EventEmitter<void>();

  onSave(){
    console.log("se preciono en guardar y cerrar ")
    this.closeUserEditModal.emit();
  }

}
