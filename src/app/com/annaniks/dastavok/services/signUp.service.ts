import { Injectable, Inject } from "@angular/core"
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CookieService } from "angular2-cookie/services/cookies.service";
import { map } from "rxjs/operators";
import { User, ServerResponse, LoginResponse } from "../models/models";

@Injectable()
export class SignUpService {
    public userInfo: User = new User();
    public isAuthorized: boolean = false;
    public userImage: string = "assets/images/userimages.png";
    constructor(@Inject('BASE_URL') private baseURL, private _httpClient: HttpClient, private _cookieService: CookieService) { }

    ngOnInit() {

    }

    public clientPhoneNumber(body) {
        return this._httpClient.post(this.baseURL + "freeclient/phone", body)
    }

    public clientVerification(body) {
        let token = this._cookieService.get("phone_token");
        let headers = new HttpHeaders({
            'Content-type': 'application/json',
            'token': token
        })
        return this._httpClient.post(this.baseURL + "freeclient/phone/verify", body, { headers })

    }

    public signUpClient(body) {
        let token = this._cookieService.get("verificationtoken");
        let headers = new HttpHeaders({
            'Content-type': 'application/json',
            'token': token
        })
        return this._httpClient.post(this.baseURL + "client", body, { headers })
    }

    public loginClient(body) {
        return this._httpClient.post(this.baseURL + "freeclient/login", body)
            .pipe(
                map((data: ServerResponse<LoginResponse>) => {
                    this.userInfo = data.data.data;
                    this._setImage(data.data);
                    this.isAuthorized = true;
                    return data;
                })
            )
    }

    public forgetPasswordPhoneNumber(body) {
        return this._httpClient.post(this.baseURL + "freeclient/forget/stepone", body)
    }

    public forgetPasswordVerification(body) {
        let token = this._cookieService.get('forgot_token')
        let headers = new HttpHeaders({
            'Content-type': 'application/json',
            'token': token
        })
        return this._httpClient.post(this.baseURL + "freeclient/forget/steptwo", body, { headers })
    }

    public newPassword(body) {
        let token = this._cookieService.get('verification_token')
        let headers = new HttpHeaders({
            'Content-type': 'application/json',
            'token': token
        })
        return this._httpClient.put(this.baseURL + "freeclient/forget/stepthree", body, { headers })
    }

    public getUserInfo() {
        let token = this._cookieService.get("token");
        let headers = new HttpHeaders({
            'Content-type': 'application/json',
            'token': token
        })
        return this._httpClient.get(this.baseURL + "client", { headers }).pipe(
            map((data: ServerResponse<User>) => {
                console.log(data);

                this.userInfo = data.data;
                this._setImage(data);
                return data;

            })
        )
    }
    public getUserImage(imageName: string) {
        let token = this._cookieService.get("token");
        let headers = new HttpHeaders({
            'Content-type': 'application/json',
            'token': token
        })
        return this._httpClient.get(this.baseURL + "client/image/" + imageName)
    }

    private _setImage(data): void {
        if (data.data.image !== null) {
            data.data.image = "http://192.168.0.110:3000/client/image/" + data.data.image;

        }
        else {
            data.data.image = "/assets/images/userimages.png";
        }
        this.userImage = data.data.image;
    }




}