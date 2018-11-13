import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CookieService } from "angular2-cookie/services/cookies.service";
import { map, catchError } from "rxjs/operators";
import { SignUpService } from "./signUp.service";
import { of } from "rxjs";
import { RouterStateSnapshot, Router } from "@angular/router";

@Injectable()
export class ApiService {

    constructor(@Inject('BASE_URL') private baseURL,
        private _httpClient: HttpClient,
        public _cookieService: CookieService,
        private _signUpService: SignUpService,
        private _router: Router
    ) { }

    public checkToken() {
        let token = this._cookieService.get("token");
        let headers = new HttpHeaders({
            'Content-type': 'application/json',
            'token': token
        })
        return this._httpClient.get(this.baseURL + "freeclient/checktoken", { headers: headers, responseType: 'text', observe: 'response' })
            .pipe(
                map((data) => {
                    this._signUpService.isAuthorized = true;
                    return true;
                }),
                catchError((err) => {
                    this._cookieService.removeAll();
                    this._signUpService.isAuthorized = false;
                    return of(true);
                }));
    }


}





