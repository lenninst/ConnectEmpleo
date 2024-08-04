import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { Ofertas, OfertasEmpleoResponse } from '../../../core/interfaces/ofertas.interface';
import { OfertaEmpleoService } from '../../../services/ofertaEmpleo.services';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { faLocationDot, faPersonDigging, faDollarSign, faPeopleGroup, faBuildingUser, faBuildingCircleCheck, faBuilding, faBriefcase, faLightbulb, faPerson, faClock } from '@fortawesome/free-solid-svg-icons';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-jobs-pages',
  standalone: true,
  templateUrl: './jobs-pages.component.html',
  styleUrl: './jobs-pages.component.css',
  imports: [RouterModule, FormsModule, MatIconModule, CommonModule, FontAwesomeModule, ReactiveFormsModule],
  providers: []
})

export class JobsPagesComponent implements OnInit {

  //NOTE: icons
  faLocationDot = faLocationDot;
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

  ofertaEmpleos: Ofertas[] = [];
  filteredOfertasEmpleos: Ofertas[] = [];
  error: string | null = null;
  noResults: boolean = false;

  constructor(
    private router: Router,
    private ofertaEmpleosService: OfertaEmpleoService) {
  }

  ngOnInit(): void {
    this.LoadOfertasEmpleo();
  }

  LoadOfertasEmpleo() {
    this.ofertaEmpleosService.GetOfertaEmpleo().subscribe(
      (response: OfertasEmpleoResponse) => {
        this.ofertaEmpleos = response.data;
        this.filteredOfertasEmpleos = this.ofertaEmpleos;
        this.noResults = this.filteredOfertasEmpleos.length === 0;

      },
      (error) => {
        this.error = 'Error al cargar ofertas';
        console.log(error);
      }
    )

  }

  /**
   * @param searchTerm - The search term entered by the user
   */
  onSearchUpdated(searchTerm: string) :void{
    this.filteredOfertasEmpleos = this.ofertaEmpleos.filter(oferta =>
      oferta.titulo.toLowerCase().includes(searchTerm.toLowerCase())
    );
    this.noResults = this.filteredOfertasEmpleos.length === 0;
  }

  navigateToLogin() {
    this.router.navigate(['/login'])
  }


}
