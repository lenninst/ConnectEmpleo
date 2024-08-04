import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DetailsComponent } from './details/details.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { Empresa, Ofertas, OfertasEmpleoResponse } from '../../../../core/interfaces/ofertas.interface';
import { OfertaEmpleoService } from '../../../../services/ofertaEmpleo.services';

import { faCheck, faLocationDot, faHeart, faBan, faBuildingUser, faLightbulb, faDollarSign, faBuilding, faBriefcase, faPerson, faClock, faPeopleGroup, faBuildingCircleCheck, faPersonDigging, faCircleExclamation, faC, } from '@fortawesome/free-solid-svg-icons';
import { SharedService } from '../../../../services/Shared.Service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [MatIconModule, FontAwesomeModule, RouterModule, DetailsComponent, RequirementsComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  faLocationDot = faLocationDot;
  faHeart = faHeart;
  faBan = faBan;
  faDollarSign = faDollarSign;
  faBuilding = faBuilding;
  faBriefcase = faBriefcase;
  faPerson = faPerson;
  faClock = faClock;
  faLightbulb = faLightbulb;
  faPeopleGroup = faPeopleGroup;
  faBuildingCircleCheck = faBuildingCircleCheck;
  faBuildingUser = faBuildingUser;
  faPersonDigging = faPersonDigging;
  faCircleExclamation = faCircleExclamation;
  faCheck = faCheck;

  ofertasEmpleos: Ofertas[] = [];
  filteredOfertasEmpleos: Ofertas[] = [];
  error: string | null = null;
  noResults: boolean = false;
  selectedOferta: Ofertas | null = null;

  showConfirmationDialog: boolean = false;
  showConfirmationPostulacionDialog: boolean = false;

  private searchSubscription: Subscription = new Subscription();

  constructor(
    private ofertasEmpleosService: OfertaEmpleoService,
    private sharedService: SharedService

  ) { }

  ngOnInit() {
    this.LoadOfertasEmpleo();
    this.searchSubscription = this.sharedService.searchTerm$.subscribe(term => {
      this.filteredOfertasEmpleos = this.filterData(term);
      this.noResults = this.filteredOfertasEmpleos.length === 0;
    }
    )
  }

  ngOnDestroy(): void {
    this.searchSubscription.unsubscribe();
  }

  LoadOfertasEmpleo() {
    this.ofertasEmpleosService.GetOfertaEmpleo().subscribe(
      (response: OfertasEmpleoResponse) => {
        this.ofertasEmpleos = response.data;
        this.filteredOfertasEmpleos = this.ofertasEmpleos;
        this.noResults = this.filteredOfertasEmpleos.length === 0;
      },
      (error) => {
        this.error = 'Error al cargar Ofertas';
        console.log(error);
      }
    )
  }

  filterData(term: string): Ofertas[] {
    return this.ofertasEmpleos.filter(oferta =>
      oferta.descripcion.toLowerCase().includes(term.toLowerCase())
    );
  }

  addFavorite() {

  }

  addPostulacion(oferta: Ofertas): void {
    this.selectedOferta = oferta;
    this.showConfirmationDialog = true;

    console.log(oferta);

  }

  cancelPostulacion(){
    this.showConfirmationDialog = false;
  }

  confirmPostulacion(){
    this.showConfirmationDialog = false;
    this.showConfirmationPostulacionDialog = true;
  }

  goToPostulacion(){

  }


}
