export interface UserRegisterRequest {
  userName: string;
  email: string;
  password: string;
  userType: string;
  termsAccepted: boolean;
}
