import { Component, OnInit } from "@angular/core"
import { FormGroup } from "@angular/forms"
import { ActivatedRoute } from "@angular/router";
import { OrderInfo } from "../../../models/models";

@Component({
    selector: "app-payment",
    templateUrl: "payment.view.html",
    styleUrls: ["payment.view.scss"]
})
export class PaymentView implements OnInit {
    public orderInfo:OrderInfo = {} as OrderInfo;
    public tab: number = 1;
    public paymentForm: FormGroup;
    public address: string;

    constructor(private _activatedRoute: ActivatedRoute) {
        this._activatedRoute.queryParams.subscribe((params) => {
            if (params.order) {
                this.orderInfo = JSON.parse(params.order);
            }
        })
    }

    ngOnInit() {

    }

    public changeTab(tabNumber: number): void {
        this.tab = tabNumber;
    }

    public getAddresValue(event) {
        this.address = event;
    }








}