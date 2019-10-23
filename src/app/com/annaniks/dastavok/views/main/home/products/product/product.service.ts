import { Injectable, Inject } from "@angular/core"
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CookieService } from "ngx-cookie";

@Injectable()

export class GoodService {

    constructor(@Inject('BASE_URL') private _baseUrl, private _httpClient: HttpClient) { }

    public getGood(id) {
        return this._httpClient.get(this._baseUrl + "freeclient/good/" + id)
    }


    public orderChart(body) {
        return this._httpClient.post(this._baseUrl + "client/order/chart", body)
    }

    public getReview(companyId: number, goodId: number, page: number, limit: number) {
        return this._httpClient.get(this._baseUrl + "freeclient/reviews/" + companyId + "/" + goodId + "?page=" + page + "&limit=" + limit)
    }

}
