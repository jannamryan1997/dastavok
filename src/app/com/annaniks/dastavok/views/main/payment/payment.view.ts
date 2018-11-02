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
    public cardPayment:boolean=true;
    public cardItem: Array<object> = [
        { image: "assets/images/mastercard.png" },
        { image: "assets/images/Visa.svg.png" },
        { image: "assets/images/maestro.png" },
        { image: "assets/images/jcb.png" }
    ]

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

    public closePayment(){
      this.cardPayment=false;
      
    }
    public showPayment(){
        this.cardPayment=true;
        
      }




}