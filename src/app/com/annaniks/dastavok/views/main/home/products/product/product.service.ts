import { Injectable, Inject } from "@angular/core"
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CookieService } from "angular2-cookie/services/cookies.service";

@Injectable()

export class GoodService {

    constructor(
        private _httpClient: HttpClient,
        private _cookieService: CookieService
    ) { }

    public getGood(id) {
        return this._httpClient.get("freeclient/good/" + id)
    }

    public orderChart(body) {
        return this._httpClient.post("client/order/chart", body)
    }

    public getReview(companyId: number, goodId: number, page: number, limit: number) {
        return this._httpClient.get("freeclient/reviews/" + companyId + "/" + goodId + "?page=" + page + "&limit=" + limit)
    }

}
