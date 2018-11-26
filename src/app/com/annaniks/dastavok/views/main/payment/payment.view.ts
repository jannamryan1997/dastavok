import { Component, OnInit, Output } from "@angular/core"
import { Validators, FormGroup, FormBuilder } from "@angular/forms"
import { ActivatedRoute } from "@angular/router";
@Component({
    selector: "app-payment",
    templateUrl: "payment.view.html",
    styleUrls: ["payment.view.scss"]
})

export class PaymentView implements OnInit {
    public orderInfo;
    public tab: number = 1;
    public paymentForm: FormGroup;
    public addres: string;

    constructor(private _activatedRoute: ActivatedRoute) {
        this._activatedRoute.queryParams.subscribe((params) => {
            if (params.order) {
                this.orderInfo = JSON.parse(params.order);
            }

        })
    }

    ngOnInit() {

    }

    public openChackOut() {
        this.tab = 1;
    }
    public openPayment() {
        this.tab = 2;
    }
    public getAddresValue(event) {
        this.addres = event;
        console.log(this.addres);

    }

    public openDone() {
        this.tab = 3;
    }






}