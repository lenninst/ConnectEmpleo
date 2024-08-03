import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Ofertas, OfertasEmpleoResponse } from "../core/interfaces/ofertas.interface";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

export class OfertaEmpleoService {
  private apiUrl: string = 'https://localhost:7138/api/OfertaEmpleo';


  constructor(private http: HttpClient){}

  GetOfertaEmpleo (): Observable<OfertasEmpleoResponse> {
    const url = this.apiUrl;
    return this.http.get<OfertasEmpleoResponse>(url);
  }

  FilterOfertaEmpleo(termino : string): Observable<Ofertas[]>{
    return this.GetOfertaEmpleo().pipe(
      map(response => response.data.filter(oferta =>
        oferta.titulo.toLowerCase().includes(termino.toLowerCase())
      ))
    );

  }
}
