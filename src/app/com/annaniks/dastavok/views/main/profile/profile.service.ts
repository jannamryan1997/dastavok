import { Injectable, Inject } from "@angular/core"
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()

export class ProfileService {

    constructor(@Inject('BASE_URL') private baseURL, private _httpClient: HttpClient) { }


    public getClient() {
        return this._httpClient.get("client")
    }

    public putClient(body) {
        return this._httpClient.put("client", body)
    }

    public clientOrderProcessing() {
        return this._httpClient.get("client/orders/processing")
    }

    public clientOrderDriver() {
        return this._httpClient.get("client/driver/orders")
    }

    public getNatifocation(page: number, limit: number) {
        return this._httpClient.get("client/notifications?page=" + page + "&limit=" + limit)
    }

    public updateClient(body) {
        return this._httpClient.put("client", body)
    }

    public updateClientImage(formData) {
        return this._httpClient.put("client/image", formData)
    }

    public putClientNewPhoneNumberStepOne(body) {
        return this._httpClient.put("client/phone/stepone", body)
    }

    public putClientNewPhoneNumberStepTwo(body) {
        return this._httpClient.put(this.baseURL + "client/phone/steptwo", body)
    }

    public getOrderData(id) {
        return this._httpClient.get(this.baseURL + "client/driver/" + id)
    }
}

