import { Injectable } from "@angular/core"
import { HttpClient, HttpParams } from "@angular/common/http";
import { Utility } from "../../../utility/utility";

@Injectable()
export class ProfileService extends Utility {

    constructor(private _httpClient: HttpClient) { 
        super()
    }


    public getClient() {
        return this._httpClient.get("client", { params: this._setAuthorizedParams() })
    }

    public putClient(body) {
        return this._httpClient.put("client", body, { params: this._setAuthorizedParams() })
    }

    public clientOrderProcessing() {
        return this._httpClient.get("client/orders/processing", { params: this._setAuthorizedParams() })
    }

    public clientOrderDriver() {
        return this._httpClient.get("client/driver/orders", { params: this._setAuthorizedParams() })
    }

    public getNatifocation(page: number, limit: number) {
        return this._httpClient.get("client/notifications?page=" + page + "&limit=" + limit, { params: this._setAuthorizedParams() })
    }

    public updateClient(body) {
        return this._httpClient.put("client", body, { params: this._setAuthorizedParams() })
    }

    public updateClientImage(formData) {
        return this._httpClient.put("client/image", formData, { params: this._setAuthorizedParams() })
    }

    public putClientNewPhoneNumberStepOne(body) {
        return this._httpClient.put("client/phone/stepone", body, { params: this._setAuthorizedParams() })
    }

    public putClientNewPhoneNumberStepTwo(body) {
        return this._httpClient.put("client/phone/steptwo", body, { params: this._setAuthorizedParams() })
    }

    public getOrderData(id) {
        return this._httpClient.get("client/driver/" + id, { params: this._setAuthorizedParams() })
    }

 
}

