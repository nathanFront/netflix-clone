import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthSerivce } from "./auth.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private authService: AuthSerivce){}

    checkLogin(){
        return localStorage.getItem('token')
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        this.authService.intendedUrl = state.url;
        const shouldProceed =  Boolean(this.checkLogin())
        if (shouldProceed) return shouldProceed;
        return this.router.parseUrl('/login');
      }
      
    

}