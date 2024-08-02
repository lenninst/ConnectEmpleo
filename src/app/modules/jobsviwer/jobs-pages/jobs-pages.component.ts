import { Component } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon'
import { Datum, jobsResponse } from '../../../core/interfaces/jobs.interface';
import { CommonModule } from '@angular/common';
import { Ofertas, OfertasEmpleoResponse } from '../../../core/interfaces/ofertas.interface';
import { OfertaEmpleoService } from '../../../services/ofertaEmpleo.services';



@Component({
  selector: 'app-jobs-pages',
  standalone: true,
  templateUrl: './jobs-pages.component.html',
  styleUrl: './jobs-pages.component.css', imports: [FormsModule, MatIconModule, CommonModule],
  providers: []
})


export class JobsPagesComponent {

  public searchTerm: string = '';
  hayError: boolean = false;
  public jobs: Datum[] = [];
  termino: string = ""

  ofertaEmpleos: Ofertas[] = [];
  error: string | null = null;

  constructor(private apiServices: ApiService, private ofertaEmpleosService: OfertaEmpleoService ) { }

  ngOnInit(): void {
    this.LoadOfertasEmpleo();
  }

  LoadOfertasEmpleo(){
    this.ofertaEmpleosService.GetOfertaEmpleo().subscribe(
      (response: OfertasEmpleoResponse) => {
        this.ofertaEmpleos = response.data;

      },
    (error)=> {
        this.error = 'Error al cargar ofertas';
        console.log(error);
      }
    )

  }


  search() {
    this.hayError = false;
    console.log(this.termino)
    this.apiServices.getJobs(this.termino)
      .subscribe((jobs) => {
        console.log(jobs);
        this.jobs = jobs.data;

        console.log("este es array jobs " + JSON.stringify(this.jobs, null, 2));

      }, (err) => {
        this.hayError = true;
        console.log('Error');
        console.info(err);
        this.jobs = [];
      });
  }


}
