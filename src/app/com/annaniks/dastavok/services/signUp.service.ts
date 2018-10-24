import { Injectable } from "@angular/core"
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CookieService } from "angular2-cookie/services/cookies.service";
import { map } from "rxjs/operators";
import { User, ServerResponse, LoginResponse } from "../models/models";

@Injectable()

export class SignUpService {
    public userInfo: User;
    public isAuthorized:boolean=false;
    private baseURL: string = "http://192.168.0.117:3000/"

    constructor(private httpClient: HttpClient, private cookieService: CookieService) { }



    public clientPhoneNumber(body) {
        return this.httpClient.post(this.baseURL + "client/phone", body)
    }

    public clientVerification(body) {
        let token = this.cookieService.get("token");
        let headers = new HttpHeaders({
            'Content-type': 'application/json',
            'token': token
        })
        return this.httpClient.post(this.baseURL + "client/phone/verify", body, { headers })

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
        return this.httpClient.post(this.baseURL + "client/login", body)
            .pipe(
                map((data: ServerResponse<LoginResponse>) => {
                    this.userInfo = data.data.data;
                    this.isAuthorized=true;
                    return data;
                })
            )
    }

    public forgetPasswordPhoneNumber(body){
        return this.httpClient.post(this.baseURL+"client/forget/stepone",body)
    }
    public forgetPasswordVerification(body){
        let token=this.cookieService.get('forgot_token')
        let headers = new HttpHeaders({
            'Content-type': 'application/json',
            'token': token
        })
        return this.httpClient.post(this.baseURL+"client/forget/steptwo",body,{headers})
    }

}