import { NgModule } from "@angular/core"
import { ProfileView } from "./profile.view";
import { ProfileRoutingModule } from "./profile.routing.module";
import { CommonModule } from "@angular/common";
import { NotificationListItemComponent, NotificationListComponent, ShippingAddressesComponent, DeliveryListItemComponent, DeliveryListComponent } from "../../../components";

@NgModule({
    declarations: [ProfileView, NotificationListItemComponent, NotificationListComponent, ShippingAddressesComponent, DeliveryListItemComponent, DeliveryListComponent],
    imports: [ProfileRoutingModule, CommonModule],
    exports: []
})

export class ProfileModule {

}