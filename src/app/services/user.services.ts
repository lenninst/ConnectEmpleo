import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserRegisterRequest } from "../core/interfaces/request/userRegisterRequest.interface";
import { Observable } from "rxjs";
import { UserLoginRequest } from "../core/interfaces/request/userLoginRequest.interface";
import { UserLoginResponse } from "../core/interfaces/response/UserLoginResponse.interface";

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private apiUrl = 'https://localhost:7138/api/User';

  constructor(private http: HttpClient){}

  registerUser(userData: UserRegisterRequest): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, userData);
  }

  loginUser(userData: UserLoginRequest): Observable<UserLoginResponse> {
    return this.http.post<UserLoginResponse>(`${this.apiUrl}/login`, userData)
  }

}
