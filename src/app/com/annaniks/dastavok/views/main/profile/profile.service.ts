import { Injectable, Inject } from "@angular/core"
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CookieService } from "angular2-cookie/services/cookies.service";
import { identifierModuleUrl } from "@angular/compiler";

@Injectable()

export class ProfileService {

    constructor(@Inject('BASE_URL') private baseURL, private _httpClient: HttpClient, private _cookieService: CookieService) { }


    public getClient() {
        let token = this._cookieService.get('token');
        let headers = new HttpHeaders({
            'Content-type': 'application/json',
            'token': token
        })
        return this._httpClient.get(this.baseURL + "client", { headers })
    }

    public putClient(body) {
        let token = this._cookieService.get('token');
        let headers = new HttpHeaders({
            'Content-type': 'application/json',
            'token': token
        })
        console.log(token);

        return this._httpClient.put(this.baseURL + "client", body, { headers })
    }

    public clientOrderProcessing() {
        let token = this._cookieService.get('token');
        let headers = new HttpHeaders({
            'Content-type': 'application/json',
            'token': token
        })
        return this._httpClient.get(this.baseURL + "client/orders/processing", { headers })
    }

    public clientOrderDriver() {
        let token = this._cookieService.get('token');
        let headers = new HttpHeaders({
            'Content-type': 'application/json',
            'token': token
        })
        return this._httpClient.get(this.baseURL + "client/driver/orders", { headers })
    }

    public getNatifocation(page: number, limit: number) {
        let token = this._cookieService.get('token');
        let headers = new HttpHeaders({
            'Content-type': 'application/json',
            'token': token
        })
        return this._httpClient.get(this.baseURL + "client/notifications?page=" + page + "&limit=" + limit, { headers })
    }

    public updateClient(body) {
        let token = this._cookieService.get('token');
        let headers = new HttpHeaders({
            'Content-type': 'application/json',
            'token': token
        })
        return this._httpClient.put(this.baseURL + "client", body, { headers })
    }

    public updateClientImage(formData) {
        let token = this._cookieService.get('token');

        let headers = new HttpHeaders({
            'token': token
        })
        return this._httpClient.put(this.baseURL + "client/image", formData, { headers })
    }

    public putClientNewPhoneNumberStepOne(body) {
        let token = this._cookieService.get('token');
        let headers = new HttpHeaders({
            'Content-type': 'application/json',
            'token': token
        })

        return this._httpClient.put(this.baseURL + "client/phone/stepone",body, { headers })
    }

    public putClientNewPhoneNumberStepTwo(body){
        let token = this._cookieService.get('token');
        let phoneNumberToken=this._cookieService.get('newPhoneNumberToken')
        let headers = new HttpHeaders({
            'Content-type': 'application/json',
            'token': token,
            'temporary-token':phoneNumberToken,
        })
        return this._httpClient.put(this.baseURL+"client/phone/steptwo",body,{headers})
    }

    public getOrderData(id){
        let token = this._cookieService.get('token');
        let headers = new HttpHeaders({
            'Content-type': 'application/json',
            'token': token,
        })
        return this._httpClient.get(this.baseURL+"client/driver/"+id,{headers})
    }
}

