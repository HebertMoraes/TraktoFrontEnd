import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DesignData } from '../entities/design-data';
import { AllDesignData } from '../entities/all-design-data';

@Injectable({
  providedIn: 'root'
})
export class DesignService {

  constructor(private http: HttpClient) {

   }

  getAllDesign() {

    const url = environment.urlGetAllDesign;

    return this.http.get<AllDesignData>(url, { responseType: 'json' }).pipe(
      catchError((err) => {
        throw 'Ops algo deu errado';
      })
    )
  }

  getSingleDesignById(id: string) {

  }
}
