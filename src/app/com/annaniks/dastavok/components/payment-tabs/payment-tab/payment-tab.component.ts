import { Component, Input, EventEmitter, OnInit, Output } from "@angular/core"
import { SignUpService } from "../../../services/signUp.service";
import { User } from "../../../models/models";
import { AddressEditModal } from "../../../modals";
import { MatDialog } from "@angular/material"
@Component({
    selector: "app-payment-tab",
    templateUrl: "payment-tab.component.html",
    styleUrls: ["payment-tab.component.scss"]
})

export class PaymentTabComponent implements OnInit {

    public cardPayment: boolean = true;
    @Input() address: string;
    public userData: User = new User();

    public cardItem: Array<object> = [
        { image: "assets/images/mastercard.png" },
        { image: "assets/images/Visa.svg.png" },
        { image: "assets/images/maestro.png" },
        { image: "assets/images/jcb.png" }
    ]

    @Input() paymentTab: number;
    @Output() changeTab: EventEmitter<number> = new EventEmitter;



    ngOnInit() {
        this.userData = this._signUpService.userInfo;
        console.log(this.userData);
     

    }

    constructor(private _signUpService: SignUpService, private _matDialog: MatDialog) { }

    public openAddressModal(): void {
        
        const dialogRef = this._matDialog.open(AddressEditModal, {
            width: "650px",
           height: "650px",
           panelClass: ['no-padding'],
        })
    }

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