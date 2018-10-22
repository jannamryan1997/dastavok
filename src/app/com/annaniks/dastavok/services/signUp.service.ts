import { Injectable } from "@angular/core"
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CookieService } from "angular2-cookie/services/cookies.service";

@Injectable()

export class SignUpService {

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
        console.log(token);

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

    public loginClient(body){
        return this.httpClient.post(this.baseURL+"client/login",body)
    }

}