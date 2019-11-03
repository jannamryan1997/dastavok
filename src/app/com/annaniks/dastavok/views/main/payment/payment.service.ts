import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http";
import { CookieService } from "ngx-cookie";
import { Utility } from "../../../utility/utility";

@Injectable()
export class PaymentService extends Utility {

    constructor(private _httpClient: HttpClient, private _cookieService: CookieService) {
        super();
    }

    public createOrder(body) {
        return this._httpClient.post("client/order", body, { params: this._setAuthorizedParams() })
    }

    public getOrderProcessing() {
        return this._httpClient.get("client/orders/processing", { params: this._setAuthorizedParams() })

    }
    public putClient(body) {
        return this._httpClient.put("client", body, { params: this._setAuthorizedParams() })
    }

    public putOrders(body) {
        return this._httpClient.put("client/chart/orders/status", body, { params: this._setAuthorizedParams() })
    }
}