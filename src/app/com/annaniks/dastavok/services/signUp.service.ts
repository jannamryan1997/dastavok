import { Injectable, Inject } from "@angular/core"
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CookieService } from "angular2-cookie/services/cookies.service";
import { map } from "rxjs/operators";
import { User, ServerResponse, LoginResponse } from "../models/models";

@Injectable()
export class SignUpService {
    public userInfo: User = new User();
    public isAuthorized: boolean = false;


    constructor(@Inject('BASE_URL') private baseURL, private httpClient: HttpClient, private cookieService: CookieService) { }

    public clientPhoneNumber(body) {
        return this.httpClient.post(this.baseURL + "freeclient/phone", body)
    }

    public clientVerification(body) {
        let token = this.cookieService.get("phone_token");
        let headers = new HttpHeaders({
            'Content-type': 'application/json',
            'token': token
        })
        return this.httpClient.post(this.baseURL + "freeclient/phone/verify", body, { headers })

    }

    public signUpClient(body) {
        let token = this.cookieService.get("verificationtoken");
        let headers = new HttpHeaders({
            'Content-type': 'application/json',
            'token': token
        })
        return this.httpClient.post(this.baseURL + "client", body, { headers })
    }

    public loginClient(body) {
        return this.httpClient.post(this.baseURL + "freeclient/login", body)
            .pipe(
                map((data: ServerResponse<LoginResponse>) => {
                    this.userInfo = data.data.data;
                    this.isAuthorized = true;
                    return data;
                })
            )
    }

    public forgetPasswordPhoneNumber(body) {
        return this.httpClient.post(this.baseURL + "freeclient/forget/stepone", body)
    }

    public forgetPasswordVerification(body) {
        let token = this.cookieService.get('forgot_token')
        let headers = new HttpHeaders({
            'Content-type': 'application/json',
            'token': token
        })
        return this.httpClient.post(this.baseURL + "freeclient/forget/steptwo", body, { headers })
    }

    public newPassword(body) {
        let token = this.cookieService.get('verification_token')
        let headers = new HttpHeaders({
            'Content-type': 'application/json',
            'token': token
        })
        return this.httpClient.put(this.baseURL + "freeclient/forget/stepthree", body, { headers })
    }

    public getUserInfo() {
        let token = this.cookieService.get("token");
        let headers = new HttpHeaders({
            'Content-type': 'application/json',
            'token': token
        })
        return this.httpClient.get(this.baseURL + "client", { headers }).pipe(
            map((data: ServerResponse<User>) => {
                this.userInfo = data.data
            })
        )
    }



}