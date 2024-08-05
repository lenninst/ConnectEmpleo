import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userIdSubject = new BehaviorSubject<number | null>(null);
  userId$ = this.userIdSubject.asObservable();

  setUserId(userId: number): void {
    this.userIdSubject.next(userId);
  }

  getUserId(): number | null {
    return this.userIdSubject.getValue();
  }
}

