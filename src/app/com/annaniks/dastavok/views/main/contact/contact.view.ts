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
            firstName: ["janna", Validators.required],
            lastName: ["mryan", Validators.required],
            email: ["jannamryan@mail.ru", [Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
            phoneNumber: ["+37494598259", Validators.required],
            messages: ["barev", Validators.required]
        })
    }

    public contact():void{
        this._contactService.contact({
            firstName:this.userForm.value.firstName,
            lastName :this.userForm.value.lastName,
            email :this.userForm.value.email,
            phoneNumber :this.userForm.value.phoneNumber,
            message:this.userForm.value.messages
        }).subscribe((data)=>{
            console.log(data);
            
        })
        
    }


    public checkIsValid(controlName: string): boolean {
        return this.userForm.get(controlName).hasError('required') && this.userForm.get(controlName).touched;
    }


}