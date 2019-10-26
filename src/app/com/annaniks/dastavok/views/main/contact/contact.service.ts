import { Injectable, Inject } from "@angular/core"
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CookieService } from "angular2-cookie/services/cookies.service";

@Injectable()

export class ContactService {

    constructor(@Inject('BASE_URL') private BASEURL, private _httpClient: HttpClient, private cookieService: CookieService) { }


    public getUserInfo() {
        return this._httpClient.get("client")
    }

    public freeClient() {
        let token = this.cookieService.get("token");
        return this._httpClient.get("client/driver/2")
    }

    public contact(body: object) {
        return this._httpClient.post(this.BASEURL+'freeclient/contact', body);
    }


}