import { Component, OnInit } from "@angular/core"
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ContactService } from "./contact.service";
import {User } from "../../../models/models";
import {TranslateService} from '@ngx-translate/core';
@Component({
    selector: "app-contact",
    templateUrl: "contact.view.html",
    styleUrls: ["contact.view.scss"]
})

export class ContactView implements OnInit {

    public userForm: FormGroup;
    public userInfo: User;

    constructor(
        private _contactService: ContactService,
        private _fb: FormBuilder,
        private translate: TranslateService
    ) { }

    ngOnInit() {
        this._formBuilder();
        this._contactService.freeClient().subscribe((data) => {
            console.log(data);

        })
    }

    private _formBuilder() {
        this.userForm = this._fb.group({
            firstName: ["", Validators.required],
            lastName: ["", Validators.required],
            email: ["", [Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
            phoneNumber: ["", Validators.required],
            messages: ["", Validators.required]
        })
    }


    public checkIsValid(controlName: string): boolean {
        return this.userForm.get(controlName).hasError('required') && this.userForm.get(controlName).touched;
    }


}