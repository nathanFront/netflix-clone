import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Series } from "../models/series";


@Injectable({
    providedIn: 'root'
})
export class MoviesService {

    constructor(private http: HttpClient){}

    getMovieSeries(idMovie: String){
        return this.http.get<Series>(environment.url_api+`/series${idMovie}`)
    }
}