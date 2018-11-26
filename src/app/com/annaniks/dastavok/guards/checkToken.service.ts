import { Injectable } from "@angular/core"
import { CanActivate, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable, of } from "rxjs";
import { ApiService } from "../services/api.service";
import { CookieService } from "angular2-cookie/services/cookies.service";



@Injectable()

export class CheckToken implements CanActivate {

    constructor(private _apiService: ApiService, private _cookieSerivce: CookieService, private _router: Router,private _activatedRoute:ActivatedRoute) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

        let token: string = this._cookieSerivce.get('token');
        if (token) {
            return this._apiService.checkToken();
        }
        else {
            return of(true);
        }
    }

}