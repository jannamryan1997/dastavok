import { Component, OnInit } from "@angular/core"
import { FormGroup, FormBuilder, Validators } from "@angular/forms"
@Component({
    selector: "app-contact",
    templateUrl: "contact.view.html",
    styleUrls: ["contact.view.scss"]
})

export class ContactView implements OnInit {

    public userForm: FormGroup;

    constructor() { }

    ngOnInit() {
        this._formBuilder();
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
}