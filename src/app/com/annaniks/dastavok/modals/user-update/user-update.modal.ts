import { Component, OnInit, Inject } from "@angular/core"
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ProfileService } from "../../views/main/profile/profile.service";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { forkJoin, of } from "rxjs";
import { SignUpService } from "../../services/signUp.service";
import { User } from "../../models/models";


declare var google;


@Component({
    selector: "app-userUpdate",
    templateUrl: "user-update.modal.html",
    styleUrls: ["user-update.modal.scss"]
})

export class UserUpdateModal implements OnInit {

    public userUpdateGroup: FormGroup;
    public loading: boolean = false;
    public serivceImage: string;
    public clientData: User;
    public error: string;
    public localImage: string;
    private _map;
    private _marker;
    private _latitude: number;
    private _longitude: number;
    public geocoder = new google.maps.Geocoder();

    constructor(
        @Inject(MAT_DIALOG_DATA) private data: any,
        private _profileService: ProfileService,
        private _dialogRef: MatDialogRef<UserUpdateModal>,
    ) { }

    ngOnInit() {
        this._formBuilder();
        this.clientData = this.data.clientData;
        this._setUserUpdateValue();
        this._initMap();
    }

    private _initMap() {
        this._map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8
        });
        google.maps.event.addListener(this._map, 'click', (event) => {
            this._latitude = event.latLng.lat();
            this._longitude = event.latLng.lng();
            this.codeAddress({ location: event.latLng })
            this._addMarker(event.latLng)
        });
    }

    private _addMarker(location) {
        if (this._marker && this._marker.setMap) {
            this._marker.setMap(null);
        }
        this._marker = new google.maps.Marker({
            position: location,
            map: this._map,
        });
    }

    private _formBuilder() {
        this.userUpdateGroup = new FormBuilder().group({
            full_name: ["", Validators.required],
            location: ["", Validators.required],
        })
        this.userUpdateGroup.get('location').valueChanges.subscribe((value) => {
            if (value) {
                this.codeAddress({ address: value })
            }
        })
    }

    private _setUserUpdateValue() {
        this.userUpdateGroup.patchValue({
            full_name: this.clientData.fullName,
            phone_number: this.clientData.phoneNumber,
        })
        if (this.clientData.image !== null) {
            this.localImage = this.clientData.image;
        }
    }

    public codeAddress(request: { address?: string, location?: any }): void {
        this.geocoder.geocode(request, (results, status) => {
            if (status == 'OK') {
                this._map.setCenter(results[0].geometry.location);
                if (request.address) {
                    this._addMarker(results[0].geometry.location);
                }
                if (request.location) {
                    this.userUpdateGroup.get('location').patchValue(results[0].formatted_address, { emitEvent: false })
                }
            }
        });
    }


    private _updateClient() {
        this.loading = true;
        this.userUpdateGroup.disable();
        return this._profileService.updateClient({
            "fullName": this.userUpdateGroup.value.full_name,
            "location": this.userUpdateGroup.value.location
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
            },
                err => {
                    this.error = err.error.error;
                    this.userUpdateGroup.enable();
                })
    }


    public checkIsValid(controlName): boolean {
        return this.userUpdateGroup.get(controlName).hasError('required') && this.userUpdateGroup.get(controlName).touched;
    }

}

