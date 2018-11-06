import { Component, Input, EventEmitter, OnInit, Output } from "@angular/core"

@Component({
    selector: "app-payment-tab",
    templateUrl: "payment-tab.component.html",
    styleUrls: ["payment-tab.component.scss"]
})

export class PaymentTabComponent implements OnInit {

    public cardPayment: boolean = true;

    public cardItem: Array<object> = [
        { image: "assets/images/mastercard.png" },
        { image: "assets/images/Visa.svg.png" },
        { image: "assets/images/maestro.png" },
        { image: "assets/images/jcb.png" }
    ]

    @Input() paymentTab: number;
    @Output() changeTab: EventEmitter<number> = new EventEmitter;



    ngOnInit() { }

    constructor() { }

    public openDone() {
        this.changeTab.emit(this.paymentTab)
    }

    public closePayment() {
        this.cardPayment = false;

    }
    public showPayment() {
        this.cardPayment = true;

    }
}