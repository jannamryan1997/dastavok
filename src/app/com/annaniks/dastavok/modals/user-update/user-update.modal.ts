import { Component, OnInit } from "@angular/core"
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ProfileService } from "../../views/main/profile/profile.service";
import { MatDialogRef } from "@angular/material";



@Component({
    selector: "app-userUpdate",
    templateUrl: "user-update.modal.html",
    styleUrls: ["user-update.modal.scss"]
})

export class UserUpdateModal implements OnInit {

    public userUpdateGroup: FormGroup;
    public loading: boolean = false;

    constructor(private _profileService: ProfileService, private _dialogRef: MatDialogRef<UserUpdateModal>) { }

    ngOnInit() {
        this._formBuilder()
    }


    private _formBuilder() {
        this.userUpdateGroup = new FormBuilder().group({
            full_name: ["", Validators.required],
            location: ["", Validators.required],
            phone_number: ["", Validators.required]
        })
    }

    public updateClient() {
        this.loading = true;
        this.userUpdateGroup.disable();
        this._profileService.updateClient({
            "fullName": this.userUpdateGroup.value.full_name,
            "location": this.userUpdateGroup.value.location,
            "phoneNumber": this.userUpdateGroup.value.phone_number,
        }).subscribe((data) => {
            this.loading = false;
            this.userUpdateGroup.enable();
            this._dialogRef.close();
            console.log(data);



        }),
            error => {
                this.loading = false;
                this.userUpdateGroup.enable();
            }
    }


}