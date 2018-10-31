import {Component, OnInit} from "@angular/core"

@Component({
    selector:"app-payment",
    templateUrl:"payment.view.html",
    styleUrls:["payment.view.scss"]
})

export class PaymentView implements OnInit{

    public tab:number=1;
    
    constructor(){}

    ngOnInit(){}

    public openChackOut(){
        this.tab=1;
    }
    public openPayment(){
        this.tab=2;
    }
}