import { Component, OnInit, Output } from "@angular/core"
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






}