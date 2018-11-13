import { Component, OnInit } from "@angular/core"
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ContactService } from "./contact.service";
import { ServerResponse, User } from "../../../models/models";


@Component({
    selector: "app-contact",
    templateUrl: "contact.view.html",
    styleUrls: ["contact.view.scss"]
})

export class ContactView implements OnInit {

    public userForm: FormGroup;
    public userInfo:User;

    constructor(private _ContactService:ContactService) { }

    ngOnInit() {
        this._formBuilder();
        this._getUserInfo();
    }

    private _formBuilder() {
        this.userForm = new FormBuilder().group({
            "first_name": ["", Validators.required],
            "last_name": ["", Validators.required],
            "email": ["", Validators.required],
            "phone_number": ["", Validators.required],
            "messages": ["", Validators.required]
        })
    }

    private _getUserInfo(){
this._ContactService.getUserInfo()
.subscribe((data:ServerResponse<User>)=>{
    this.userInfo=data.data;
    console.log(data);
    
})
    }
}