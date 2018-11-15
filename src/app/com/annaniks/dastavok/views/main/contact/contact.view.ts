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
    public userInfo: User;

    constructor(private _contactService: ContactService) { }

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