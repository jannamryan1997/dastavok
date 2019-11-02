import { Injectable, Inject } from "@angular/core"
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CookieService } from "ngx-cookie";
import { Utility } from "../../../utility/utility";

@Injectable()

export class ContactService extends Utility {

    constructor(private _httpClient: HttpClient, private cookieService: CookieService) {
        super();
    }


    public getUserInfo() {
        return this._httpClient.get("client", { params: this._setAuthorizedParams() })
    }

    public freeClient() {
        return this._httpClient.get("client/driver/2")
    }

    public contact(body: object) {
        return this._httpClient.post('freeclient/contact', body);
    }


}