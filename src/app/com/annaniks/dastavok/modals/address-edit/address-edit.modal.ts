import { Component, OnInit, Inject } from "@angular/core"
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PaymentService } from "../../views/main/payment/payment.service";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { User } from "../../models/models";
import { SignUpService } from "../../services/signUp.service";


@Component({
    selector: "app-address-edit",
    templateUrl: "address-edit.modal.html",
    styleUrls: ["address-edit.modal.scss"]
})

export class AddressEditModal implements OnInit {

    public userUpdateGroup: FormGroup;
    public clientData: User;

    constructor(@Inject(MAT_DIALOG_DATA) private data: any, private _paymentService: PaymentService, private dialogRef: MatDialogRef<AddressEditModal>, private _signUpService: SignUpService) { }

    ngOnInit() {
        this.clientData = this.data.userData;
        this._formBuilder();
        this._setPachValue();





    }


    private _formBuilder() {
        this.userUpdateGroup = new FormBuilder().group({
            full_name: ["", Validators.required],
            location: ["", Validators.required],
            phone_number: ["", Validators.required],
        })
    }

    private _setPachValue() {
        this.userUpdateGroup.patchValue({
            full_name: this.clientData.fullName,
            location: this.clientData.address,
            phone_number: this.clientData.phoneNumber,
        })
    }

    public putClient() {
        this._paymentService.putClient({
            "fullName": this.userUpdateGroup.value.full_name,
        }).subscribe((data) => {
            this.dialogRef.close();
            console.log(data);
         
        })
     
    }

 
}