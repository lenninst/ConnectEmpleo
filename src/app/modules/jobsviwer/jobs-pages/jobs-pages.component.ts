import { Component } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-jobs-pages',
  standalone: true,
  imports: [HttpClientModule, FormsModule],
  templateUrl: './jobs-pages.component.html',
  styleUrl: './jobs-pages.component.css'
})
export class JobsPagesComponent {

  searchTerm: string = '';
  resultado: any[] = [];

  constructor (private apiServices: ApiService) {}

  async getJobs() {
    try {
      this.resultado = await this.apiServices.getJobs(this.searchTerm);
      console.log(this.resultado);
    } catch (error) {
      console.error(error);
    }
  }

}
