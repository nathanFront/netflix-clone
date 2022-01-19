import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from "@angular/common/http";

import { map } from "rxjs/operators";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesDBService {

  constructor(private _http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  getMovie(): Observable<any>{
    return this._http
    .get(`${environment.movieApi}discover/movie?sort_by=popularity.desc&api_key=${environment.apiKey}&language=pt-BR`, this.httpOptions)
    .pipe(map(res =>  res));
  }


}
