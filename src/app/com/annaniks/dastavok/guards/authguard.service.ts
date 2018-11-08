import { Injectable } from "@angular/core"
import { CanActivate } from "@angular/router";
import { Observable, of } from "rxjs";
import { ApiService } from "../services/api.service";
import { CookieService } from "angular2-cookie/services/cookies.service";



@Injectable()

export class AuthGuard implements CanActivate {

    constructor(private _apiService: ApiService, private _cookieSerivce: CookieService) { }

    canActivate(): boolean | Observable<boolean> | Promise<boolean> {
        let token: string = this._cookieSerivce.get('token');
        if (token) {
            return this._apiService.checkToken()
        }
        else {
            return true;
        }
    }

}