import { Component } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon'
import { Datum, jobsResponse } from '../../../core/interfaces/jobs.interface';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-jobs-pages',
  standalone: true,
  imports: [HttpClientModule, FormsModule, MatIconModule, CommonModule],
  templateUrl: './jobs-pages.component.html',
  styleUrl: './jobs-pages.component.css'
})


export class JobsPagesComponent {

  public searchTerm: string = '';
  hayError: boolean = false;
  public jobs: Datum[] = [];
  termino: string = ""

  constructor(private apiServices: ApiService) { }

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
