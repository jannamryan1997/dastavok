import { Component, OnInit } from "@angular/core"
import { Validators, FormGroup, FormBuilder } from "@angular/forms"
@Component({
    selector: "app-payment",
    templateUrl: "payment.view.html",
    styleUrls: ["payment.view.scss"]
})

export class PaymentView implements OnInit {

    public tab: number = 1;
    public paymentForm: FormGroup;

    constructor() { }

    ngOnInit() {
        this._formBuilder()
    }

    public openChackOut() {
        this.tab = 1;
    }
    public openPayment() {
        this.tab = 2;
    }

    public openDone() {
        this.tab = 3;
    }

    private _formBuilder() {
        this.paymentForm = new FormBuilder().group({
            address:[null],
            appartment:[null]
        })
    }
}