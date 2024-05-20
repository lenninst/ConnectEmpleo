import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jobsResponse } from '../core/interfaces/jobs.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
   private apiUrl = 'https://jsearch.p.rapidapi.com/search';
  private rapidapiKey = 'b2faab3e75msh927c4d45d2ce5a3p169810jsnad46a0253f38';

  constructor(private http: HttpClient) { }

  getJobs(query: string): Observable<jobsResponse> {
    const headers = new HttpHeaders({
      'X-Rapidapi-Key': this.rapidapiKey,
      'X-Rapidapi-Host': 'jsearch.p.rapidapi.com'
    });

    const params = {
      query: query,
      page: '1',
      num_pages: '1'
    };

    return this.http.get<jobsResponse>(this.apiUrl, { headers: headers, params: params });
  }}
