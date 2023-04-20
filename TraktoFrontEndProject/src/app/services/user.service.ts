import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const urlSignInEmailPassword = "https://api.trakto.io/auth/signin";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  signInWithEmailPassword(params: any) {
    return this.http.post(urlSignInEmailPassword, params);
  }
}
