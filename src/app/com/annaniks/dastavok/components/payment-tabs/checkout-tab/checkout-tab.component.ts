import { Component, OnInit, Input } from "@angular/core";
import { Validators, FormBuilder, FormGroup } from "@angular/forms"


@Component({
    selector: "app-checkout-tab",
    templateUrl: "checkout-tab.component.html",
    styleUrls: ["checkout-tab.component.scss"]
})

export class CheckoutTabComponent implements OnInit {

    public paymentForm: FormGroup;
    @Input() paymentTab:number;

    constructor() { }

    ngOnInit() {
        this._formBuilder();
    }

    private _formBuilder() {
        this.paymentForm = new FormBuilder().group({
            address: [null],
            appartment: [null]
        })
    }

    public openPayment(){
        this.paymentTab=2;
        console.log("ug");
        
    }

}