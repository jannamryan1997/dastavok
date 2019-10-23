import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CookieService } from "angular2-cookie/services/cookies.service";


@Injectable()

export class CardService {

    constructor(
        private _httpClient: HttpClient,
        private _cookieService: CookieService) { }


    public getOrderChart() {
        return this._httpClient.get("client/orders/chart")
    }

    public deleteOrderChart(orderId: number, orderGoodsId: number) {
        return this._httpClient.delete(`client/chart/good/${orderId}/${orderGoodsId}`)
    }


    public deleteItemOrderChart(orderId) {
        return this._httpClient.delete("client/chart/order/" + orderId)
    }
}