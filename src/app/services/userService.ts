import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { UserInfo } from "../models/userInfo";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient){}

    getUser(idUser: number){ 
        return this.http.get<UserInfo>(environment.url_api + `/users/${idUser}`)
    }
}