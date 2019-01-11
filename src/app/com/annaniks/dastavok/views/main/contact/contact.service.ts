import { Injectable, Inject } from "@angular/core"
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CookieService } from "angular2-cookie/services/cookies.service";

@Injectable()

export class ContactService {

    constructor(@Inject('BASE_URL') private BASEURL, private _httpClient: HttpClient, private cookieService: CookieService) { }


    getUserInfo() {
        let token = this.cookieService.get("token");
        let headers = new HttpHeaders({
            'Content-type': 'application/json',
            'token': token
        })
        return this._httpClient.get(this.BASEURL + "client", { headers })
    }

    public freeClient() {
        let token = this.cookieService.get("token");
        let headers = new HttpHeaders({
            'Content-type': 'application/json',
            'token': token
        })
        return this._httpClient.get(this.BASEURL + "client/driver/2", { headers })
    }


}