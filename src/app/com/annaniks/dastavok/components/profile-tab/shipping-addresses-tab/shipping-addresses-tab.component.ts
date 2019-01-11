import { Component, OnInit, Input } from "@angular/core"
import { ProfileService } from "../../../views/main/profile/profile.service";
import { ClientDriver, ServerResponse } from "../../../models/models";

@Component({
    selector: "app-shipping-addresses-tab",
    templateUrl: "shipping-addresses-tab.component.html",
    styleUrls: ["shipping-addresses-tab.component.scss"]
})

export class ShippingAddressesComponent implements OnInit {

    @Input() clientId:number;
   public orderData:ClientDriver;
   
    constructor(private _profileService:ProfileService) { }

    ngOnInit() {
        this._getOrderData();
     }

    private _getOrderData(){
        this._profileService.getOrderData(this.clientId)
        .subscribe((data:ServerResponse<ClientDriver>)=>{
            this.orderData=data.data;
            console.log(this.orderData,"gfd");
            
        })

    }

}