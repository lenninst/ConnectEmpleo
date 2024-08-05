import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CandidatoResponse, CandidatoData } from '../core/interfaces/response/candidatoResponse.interface';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {
  private apiUrl = 'https://localhost:7138/api';
  private candidatoSubject = new BehaviorSubject<CandidatoData | null>(null);
  candidato$ = this.candidatoSubject.asObservable();

  constructor(private http: HttpClient, private authService: AuthService) { }

  fetchCandidatoByFk(userFk: number): Observable<CandidatoResponse> {
    return this.http.get<CandidatoResponse>(`${this.apiUrl}/Candidato/by-fk/${userFk}`).pipe(
      tap((response: CandidatoResponse) => {
        if (response.isSuccess) {
          this.candidatoSubject.next(response.data);

          localStorage.setItem('candidatoId', response.data.id.toString());
        } else {
          this.candidatoSubject.next(null);
          localStorage.removeItem('candidatoId')
        }
      })
    );
  }

  fetchCandidatoByLoggedInUser(): void {

    // const userFk = this.authService.getUserId();
    const userFk = this.getUserFk()
    if (userFk !== null) {
      this.fetchCandidatoByFk(userFk).subscribe();
    }
  }

  getCandidatoId(): number | null {
    const candidatoId = localStorage.getItem('candidatoId');
    return candidatoId ? parseInt(candidatoId, 10) : null;
  }

  getUserFk(): number | null {
    const userFk = localStorage.getItem('UserFk');
    return userFk ? parseInt(userFk, 10) : null;
  }
}

