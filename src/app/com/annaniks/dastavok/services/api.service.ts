import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CookieService } from "angular2-cookie/services/cookies.service";

@Injectable()

export class ApiService {

    private baseURL: string = "http://192.168.0.117:3000/"

    constructor(private _httpClient: HttpClient, public _cookieService: CookieService) { }

    public getUserInfo() {
        let token = this._cookieService.get("accessToken");
        let headers = new HttpHeaders({
            'Content-type': 'application/json',
            'token': token
        })
        return this._httpClient.get(this.baseURL + "client", { headers })
    }
}





