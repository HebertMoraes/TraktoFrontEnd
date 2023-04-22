import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  signInWithEmailPassword(email: string, password: string): Observable<any> {

    const url = environment.urlSignInEmailPassword;

    return this.http.post(url, { email, password }, { responseType: 'json' }).pipe(
      map((dataResponse) => {
        this.setTokenLocalStorage(dataResponse);
      }),
      catchError((err) => {
        this.removerTokenLocalStorage();
        throw 'Falha ao efetuar login.';
      })
    );
  };

  public getToken(): string | null {
    return localStorage.getItem(environment.access_token);
  }

  private setTokenLocalStorage(dataResponse: any): void {
    const { access_token, refresh_token, firebase_token } = dataResponse;
    localStorage.setItem(environment.access_token, access_token)
  }

  private removerTokenLocalStorage(): void {
    localStorage.removeItem(environment.access_token);
  }
}
