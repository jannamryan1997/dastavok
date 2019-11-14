import { Injectable, Inject } from "@angular/core"
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { CookieService } from "ngx-cookie";
import { map } from "rxjs/operators";
import { User, ServerResponse, LoginResponse } from "../models/models";
import { Utility } from "../utility/utility";

@Injectable()
export class SignUpService extends Utility {
    public userInfo: User = new User();
    public isAuthorized: boolean = false;
    public userImage: string = "assets/images/userimages.png";
    constructor(
        @Inject('FILE_URL') private _fileUrl,
        private _httpClient: HttpClient,
        private _cookieService: CookieService
    ) {
        super();
    }

    public clientPhoneNumber(body) {
        return this._httpClient.post("freeclient/phone", body)
    }

    public clientVerification(body) {
        let token = this._cookieService.get("phone_token");
        let headers = new HttpHeaders({
            'Content-type': 'application/json',
            'token': token
        })
        return this._httpClient.post("freeclient/phone/verify", body, { headers: headers })
    }

    public signUpClient(body, param?: string) {
        let headers = new HttpHeaders({
            'token': this._cookieService.get((param && param == 'fast_reg') ? 'token' : 'verificationtoken') || ''
        })
        return this._httpClient.post("client", body, { headers })
    }

    public loginClient(body) {
        return this._httpClient.post("freeclient/login", body)
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
        return this._httpClient.post("freeclient/forget/stepone", body)
    }

    public forgetPasswordVerification(body) {
        let headers = new HttpHeaders({
            'token': this._cookieService.get('forgot_token') || ''
        })
        return this._httpClient.post("freeclient/forget/steptwo", body, { headers })
    }

    public newPassword(body) {
        return this._httpClient.put("freeclient/forget/stepthree", body)
    }

    public getUserInfo() {
        return this._httpClient.get("client", { params: this._setAuthorizedParams() }).pipe(
            map((data: ServerResponse<User>) => {
                this.userInfo = data.data;
                if (data.data.image !== null) {
                    data.data.image = this._fileUrl + "client/image/" + data.data.image;
                }
                else {
                    data.data.image = "/assets/images/userimages.png";
                }
                this.userImage = data.data.image;
                this._setImage(data);
                return data;

            })
        )
    }

    public getUserImage(imageName: string) {
        return this._httpClient.get("client/image/" + imageName)
    }

    private _setImage(data): void {
        if (data.data.image !== null) {
            data.data.image = this._fileUrl + "client/image/" + data.data.image;
        }
        else {
            data.data.image = "/assets/images/userimages.png";
        }
        this.userImage = data.data.image;
    }


}