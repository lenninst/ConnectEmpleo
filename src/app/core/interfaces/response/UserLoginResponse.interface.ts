export interface UserLoginResponse {
    isSuccess: boolean;
    data:      Data;
    message:   string;
    token:     string;
    errors:    null;
}

export interface Data {
    id:       number;
    userName: string;
    email:    string;
    userType: string;
}

