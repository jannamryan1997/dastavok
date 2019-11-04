import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CookieService } from "ngx-cookie";
import { map, catchError } from "rxjs/operators";
import { SignUpService } from "./signUp.service";
import { of } from "rxjs";
import { Utility } from "../utility/utility";

@Injectable()
export class ApiService extends Utility {

    constructor(
        private _httpClient: HttpClient,
        public _cookieService: CookieService,
        private _signUpService: SignUpService,
    ) {
        super();
    }

    public checkToken() {
        return this._httpClient.get("freeclient/checktoken", { responseType: 'text', observe: 'response', params: this._setAuthorizedParams() })
            .pipe(
                map((data) => {
                    this._signUpService.isAuthorized = true;
                    return true;
                }),
                catchError((err) => {
                    console.log('dd');
                    this._cookieService.removeAll();
                    this._signUpService.isAuthorized = false;
                    return of(true);
                }));
    }


}





