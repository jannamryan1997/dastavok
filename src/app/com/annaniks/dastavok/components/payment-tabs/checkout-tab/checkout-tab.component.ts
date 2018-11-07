import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Validators, FormBuilder, FormGroup } from "@angular/forms"



@Component({
    selector: "app-checkout-tab",
    templateUrl: "checkout-tab.component.html",
    styleUrls: ["checkout-tab.component.scss"]
})

export class CheckoutTabComponent implements OnInit {

    public paymentForm: FormGroup;
    @Input() paymentTab: number;
    @Output() changeTab: EventEmitter<number> = new EventEmitter<number>();

    constructor() { }

    ngOnInit() {
        this._formBuilder();
    }

    private _formBuilder() {
        this.paymentForm = new FormBuilder().group({
            address: ["", Validators.required],
            apartment: ["", Validators.required],
            domaphore: ["", Validators.required],
            lift: ["", Validators.required],
            comment: ["", Validators.required]
        })
    }

    public openPayment() {
        this.changeTab.emit(this.paymentTab);
    }

}