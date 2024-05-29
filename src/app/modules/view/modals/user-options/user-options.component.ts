import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-options',
  standalone: true,
  imports: [ FontAwesomeModule],
  templateUrl: './user-options.component.html',
  styleUrl: './user-options.component.css'
})
export class UserOptionsComponent {
  faX = faX;

  @Output()  closeUserModalEvent = new EventEmitter<void>();

  onClose() {
    this.closeUserModalEvent.emit();
    console.log("press")
  }

  //FIX: por corregir no funciona

  @HostListener('document.click', [`$event.target`])
  onClickOutside (targetElement: HTMLElement) {
    console.log("kanguro");
    const modal =  document.querySelector('user_modal_content');
    if(modal && !modal.contains(targetElement)){
      this.onClose();
    }
  }

}
