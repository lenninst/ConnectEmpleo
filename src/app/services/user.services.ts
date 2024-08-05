import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserRegisterRequest } from "../core/interfaces/request/userRegisterRequest.interface";
import { Observable, tap } from "rxjs";
import { UserLoginRequest } from "../core/interfaces/request/userLoginRequest.interface";
import { UserLoginResponse } from "../core/interfaces/response/UserLoginResponse.interface";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private apiUrl = 'https://localhost:7138/api/User';

  constructor(private http: HttpClient, private authService: AuthService) { }

  registerUser(userData: UserRegisterRequest): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, userData);
  }

  loginUser(userData: UserLoginRequest): Observable<UserLoginResponse> {
    return this.http.post<UserLoginResponse>(`${this.apiUrl}/login`, userData).pipe(
      tap((response: UserLoginResponse) => {
        if(response.isSuccess){
          this.authService.setUserId(response.data.id)

          localStorage.setItem('UserFk', response.data.id.toString());
        }else {
          localStorage.removeItem("UserFk");
        }
      })
    )
  }

  getUserFk(): number |null{
    const userFk = localStorage.getItem('UserFk');
    return userFk? parseInt(userFk, 10): null;
  }

}
