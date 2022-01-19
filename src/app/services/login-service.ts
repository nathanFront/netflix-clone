import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { User } from "../models/user";

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    
    constructor(private http: HttpClient){}

    
    login(user: User){
        return this.http.post(environment.url_api + `/login`, user)
    }

}