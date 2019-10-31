import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class BasketService {

    constructor(
        private _httpClient: HttpClient
    ) { }

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