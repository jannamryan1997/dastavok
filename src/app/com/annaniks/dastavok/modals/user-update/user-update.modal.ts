import { Component, OnInit } from "@angular/core"
import { FormGroup, FormBuilder, Validators } from "@angular/forms"
@Component({
    selector: "app-userUpdate",
    templateUrl: "user-update.modal.html",
    styleUrls: ["user-update.modal.scss"]
})

export class UserUpdateModal implements OnInit {

    public userUpdateGroup: FormGroup;

    constructor() { }

    ngOnInit() {
        this._formBuilder()
    }


    private _formBuilder() {
        this.userUpdateGroup = new FormBuilder().group({
            user_name: ["", Validators.required],
            location: ["", Validators.required],
            phone_number: ["", Validators.required]
        })
    }


}