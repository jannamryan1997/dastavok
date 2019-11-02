import { HttpParams } from "@angular/common/http";

export class Utility{

    protected _setAuthorizedParams(): HttpParams {
        let params: HttpParams = new HttpParams();
        params = params.set('isAuthorized', 'true');
        return params;
    }
}