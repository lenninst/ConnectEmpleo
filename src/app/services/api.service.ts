import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  async getJobs(searchTerm?: string) {
    const options = {
      method: 'GET',
      url: 'https://jsearch.p.rapidapi.com/search',
      params: {
        query: searchTerm,
        page: '1',
        num_pages: '1'
      },
      headers: {
        'X-RapidAPI-Key': 'b2faab3e75msh927c4d45d2ce5a3p169810jsnad46a0253f38',
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error: any) {
      throw new Error(error.response.data);
    }
  }
}
