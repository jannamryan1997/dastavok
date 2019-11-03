import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Utility } from "../../../../utility/utility";

@Injectable()
export class BasketService extends Utility {

    constructor(
        private _httpClient: HttpClient
    ) {
        super();
    }

    public getOrderChart() {
        return this._httpClient.get("client/orders/chart", { params: this._setAuthorizedParams() })
    }

    public deleteOrderChart(orderId: number, orderGoodsId: number) {
        return this._httpClient.delete(`client/chart/good/${orderId}/${orderGoodsId}`, { params: this._setAuthorizedParams() })
    }


    public deleteItemOrderChart(orderId) {
        return this._httpClient.delete("client/chart/order/" + orderId, { params: this._setAuthorizedParams() })
    }
}