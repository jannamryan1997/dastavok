import { Injectable, Inject } from "@angular/core"
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CookieService } from "ngx-cookie";

@Injectable()

export class ContactService {

    constructor(private _httpClient: HttpClient, private cookieService: CookieService) { }


    public getUserInfo() {
        return this._httpClient.get("client")
    }

    public freeClient() {
        let token = this.cookieService.get("token");
        return this._httpClient.get("client/driver/2")
    }


}