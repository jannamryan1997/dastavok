import { Component, OnInit } from "@angular/core"
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ProfileService } from "../../views/main/profile/profile.service";


@Component({
    selector: "app-userUpdate",
    templateUrl: "user-update.modal.html",
    styleUrls: ["user-update.modal.scss"]
})

export class UserUpdateModal implements OnInit {

    public userUpdateGroup: FormGroup;

    constructor(private _profileService: ProfileService) { }

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

    public putClient() {
        this._profileService.putClient({
            "fullName": this.userUpdateGroup.value.full_name;


        }).subscribe((data) => {
            console.log(data);

        })
    }


}