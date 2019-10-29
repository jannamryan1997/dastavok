import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CookieService } from "angular2-cookie/services/cookies.service";
import { map, catchError } from "rxjs/operators";
import { SignUpService } from "./signUp.service";
import { of } from "rxjs";

@Injectable()
export class ApiService {

    constructor(
        private _httpClient: HttpClient,
        public _cookieService: CookieService,
        private _signUpService: SignUpService,
    ) { }

    public checkToken() {
        return this._httpClient.get("freeclient/checktoken", { responseType: 'text', observe: 'response' })
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





