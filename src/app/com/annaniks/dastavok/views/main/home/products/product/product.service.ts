import { Injectable, Inject } from "@angular/core"
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CookieService } from "angular2-cookie/services/cookies.service";

@Injectable()

export class GoodService {

    constructor(@Inject('BASE_URL') private _baseUrl, private _httpClient: HttpClient, private _cookieService: CookieService) { }

    public getGood(id) {
        return this._httpClient.get(this._baseUrl + "freeclient/good/" + id)
    }


    public orderChart(body) {
        return this._httpClient.post(this._baseUrl + "client/order/chart", body)
    }

}