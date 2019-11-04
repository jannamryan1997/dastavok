import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http";
import { CookieService } from "ngx-cookie";
import { Utility } from "./../../../../../utility/utility";

@Injectable()

export class GoodService extends Utility {

    constructor(
        private _httpClient: HttpClient
    ) {
        super();
    }

    public getGood(id) {
        return this._httpClient.get("freeclient/good/" + id)
    }

    public orderChart(body) {
        return this._httpClient.post("client/order/chart", body, { params: this._setAuthorizedParams() })
    }

    public getReview(companyId: number, goodId: number, page: number, limit: number) {
        return this._httpClient.get("freeclient/reviews/" + companyId + "/" + goodId + "?page=" + page + "&limit=" + limit)
    }

}
