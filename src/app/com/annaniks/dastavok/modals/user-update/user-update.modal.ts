import { Component, OnInit, Inject } from "@angular/core"
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ProfileService } from "../../views/main/profile/profile.service";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { forkJoin, of } from "rxjs";
import { SignUpService } from "../../services/signUp.service";
import { User } from "../../models/models";



@Component({
    selector: "app-userUpdate",
    templateUrl: "user-update.modal.html",
    styleUrls: ["user-update.modal.scss"]
})

export class UserUpdateModal implements OnInit {

    public userUpdateGroup: FormGroup;
    public loading: boolean = false;
    public serivceImage: string;
    public localImage: string = "assets/images/userimages.png";
    public clientData: User;
    public error: string;

    constructor(@Inject(MAT_DIALOG_DATA) private data: any, private _profileService: ProfileService, private _dialogRef: MatDialogRef<UserUpdateModal>, private _signUpService: SignUpService) { }

    ngOnInit() {
        this._formBuilder();
        this.clientData = this.data.clientData;
        this._setUserUpdateValue();
        console.log(this.clientData.image);

    }


    private _formBuilder() {
        this.userUpdateGroup = new FormBuilder().group({
            full_name: ["", Validators.required],
            location: ["", Validators.required],
            phone_number: ["", Validators.required]
        })
    }
    private _setUserUpdateValue() {
        this.userUpdateGroup.patchValue({
            full_name: this.clientData.fullName,
            phone_number: this.clientData.phoneNumber,
        })
        if (this.clientData.image !== null) {
            this.localImage =  this.clientData.image;
        }
    }

    private _updateClient() {
        this.loading = true;
        this.userUpdateGroup.disable();
        return this._profileService.updateClient({
            "fullName": this.userUpdateGroup.value.full_name,
            //  "location": this.userUpdateGroup.value.location,
            // "phoneNumber": this.userUpdateGroup.value.phone_number,
        })
    }


    public setServicePhoto(event) {
        if (event) {
            let reader = new FileReader()
            this.serivceImage = event;

            let self = this;
            reader.onload = function (e: any) {
                self.localImage = e.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }

    }

    private _updateUserImage(event) {
        if (event) {
            let fileList: FileList = event.target.files;
            if (fileList.length > 0) {
                let file: File = fileList[0];
                let formData: FormData = new FormData();
                formData.append('image', file, file.name);
                return this._profileService.updateClientImage(formData)

            }
            else {
                return of([]);
            }
        }

    }
    public updeteClientData() {
        forkJoin(this._updateClient(), this._updateUserImage(this.serivceImage))
            .subscribe((data) => {
                this.loading = false;
                this.userUpdateGroup.enable();
                this._dialogRef.close();
                console.log(data);
                console.log(data);

            },
                err => {
                    this.error = err.error.error;
                })
    }
}

