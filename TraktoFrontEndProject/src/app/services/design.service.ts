import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DesignService {

  constructor(private http: HttpClient) {

   }

  getAllDesign() {

    const url = environment.urlGetAllDesign;

    return this.http.get(url, { responseType: 'json' }).pipe(
      catchError((err) => {
        console.log("queijo");
        throw 'Ops algo deu errado';
      })
    )
  }

  getSingleDesignById(id: string) {

  }
}
