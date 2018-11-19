import { Injectable } from "@angular/core"
import { CanActivate, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable, of } from "rxjs";
import { ApiService } from "../services/api.service";
import { CookieService } from "angular2-cookie/services/cookies.service";



@Injectable()

export class AuthGuard implements CanActivate {

    constructor(private _apiService: ApiService, private _cookieSerivce: CookieService, private _router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

        let token: string = this._cookieSerivce.get('token');
        if (token) {

            return this._apiService.checkToken();

        }
        else {
            console.log(state);

            if (state.url == '/profile' || state.url == '/payment') {
                this._router.navigate(['/home/information']);
                return of(false);
            }
            else {
                return of(true);
            }

        }
    }

}