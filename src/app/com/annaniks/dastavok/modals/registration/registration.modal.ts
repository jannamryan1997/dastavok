import {Component, OnInit} from "@angular/core"
import { FormGroup,FormBuilder,Validator, Validators } from "@angular/forms";

@Component({
    selector:"app-registration",
    templateUrl:"registration.modal.html",
    styleUrls:["registration.modal.scss"]
})

export class RegistrarionModals implements OnInit{
    public registerForm:FormGroup;
    constructor(){}

    ngOnInit(){
        this._formBuilder();
    }

    private _formBuilder(){
        this.registerForm=new FormBuilder().group({
            registrNumber:["",Validators.required]
        })
    }
}