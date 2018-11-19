import { Component, OnInit } from "@angular/core"
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PaymentService } from "../../views/main/payment/payment.service";


@Component({
    selector: "app-address-edit",
    templateUrl: "address-edit.modal.html",
    styleUrls: ["address-edit.modal.scss"]
})

export class AddressEditModal implements OnInit {

    public userUpdateGroup: FormGroup;

    constructor(private _paymentService: PaymentService) { }

    ngOnInit() {
        this._formBuilder();
    }


    private _formBuilder() {
        this.userUpdateGroup = new FormBuilder().group({
            full_name: ["", Validators.required],
            location: ["", Validators.required],
            phone_number: ["", Validators.required],
        })
    }

    public putClient() {
        this._paymentService.putClient({
            "fullName": this.userUpdateGroup.value.full_name,
            "address_validation": this.userUpdateGroup.value.location,
            "apartment_validation": "asd",
            "domaphore_validation": "asd",
        }).subscribe((data) => {
            console.log(data);

        })
    }

}