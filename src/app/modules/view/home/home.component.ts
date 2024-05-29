import { Component } from '@angular/core';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { SavedComponent } from '../components/saved/saved.component';
import { ChoiceComponent } from '../components/choice/choice.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports:
    [
      FooterComponent,
      MatIconModule,
      RouterModule,
      NavbarComponent,
      ChoiceComponent,
      SavedComponent,
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
