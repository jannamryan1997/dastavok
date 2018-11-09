import { NgModule } from "@angular/core"
import { ProfileView } from "./profile.view";
import { ProfileRoutingModule } from "./profile.routing.module";
import { CommonModule } from "@angular/common";
import { NotificationListItemComponent, NotificationListComponent, ShippingAddressesComponent, DeliveryListItemComponent, DeliveryListComponent } from "../../../components";
import { ProfileService } from "./profile.service";

@NgModule({
    declarations: [ProfileView, NotificationListItemComponent, NotificationListComponent, ShippingAddressesComponent, DeliveryListItemComponent, DeliveryListComponent],
    imports: [ProfileRoutingModule, CommonModule],
    providers:[ProfileService],
    exports: []
})

export class ProfileModule {

}