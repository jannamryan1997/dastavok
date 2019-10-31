import { Injectable } from "@angular/core"
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable, } from "rxjs";
import { SignUpService } from "../services/signUp.service";



@Injectable()

export class AuthGuard implements CanActivate {

    constructor (private _router: Router,private _signupService:SignUpService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        if(this._signupService.isAuthorized){
            return true;
        }
        else{
            this._router.navigate(['/']);
            return false;
        }
        
    }

}