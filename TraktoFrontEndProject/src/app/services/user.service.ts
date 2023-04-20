import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  signInWithEmailPassword(email: string, password: string): Observable<any> {

    const url = environment.urlSignInEmailPassword
    return this.http.post(url, { email, password }, { responseType: 'json' }).pipe(
      map((data) => this.setTokenLocalStorage(data)),
      catchError((err) => {
        this.removerTokenLocalStorage();
        throw 'Falha ao efetuar login.'
      })
    )
  };

  public getToken(): string | null {
    return localStorage.getItem(environment.token);
  }

  private setTokenLocalStorage(response: any): void {
    const { type, token, _ } = response;
    localStorage.setItem(environment.token, token)
  }

  private removerTokenLocalStorage(): void {
    localStorage.removeItem(environment.token);
  }
}
