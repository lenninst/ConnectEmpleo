import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PostulacionRequest } from "../core/interfaces/request/postulacionRequest.interface";
import { Observable } from "rxjs";
import { PostulacionDeleteResponse } from "../core/interfaces/response/postulacionResponse.interface";

@Injectable({
  providedIn: 'root'
})
export class PostulacionService {
  private apiUrl = 'https://localhost:7138/api';

  constructor(private http: HttpClient) { }

  postularOferta(postularOferta: PostulacionRequest): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/Postulacion/Postular`, postularOferta);
  }

  deletePostulacion(id: number): Observable<PostulacionDeleteResponse> {
    return this.http.delete<PostulacionDeleteResponse>(`${this.apiUrl}/Postulacion/${id}`);
  }
}
