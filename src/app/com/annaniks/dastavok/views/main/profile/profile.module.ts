import { NgModule } from "@angular/core"
import { ProfileView } from "./profile.view";
import { ProfileRoutingModule } from "./profile.routing.module";
import { CommonModule, DatePipe } from "@angular/common";
import {
    NotificationListItemComponent, NotificationListComponent,
    ShippingAddressesComponent, DeliveryListItemComponent,
    DeliveryListComponent, OrderListComponent, OrderListItemComponent, EmptyComponent,OrdersTabComponent,NotificationTabComponent
} from "../../../components";
import { SharedModule } from "../../../shared/shared.module";



@NgModule({
    declarations: [
        ProfileView,
        NotificationListItemComponent,
        NotificationListComponent,
        ShippingAddressesComponent,
        DeliveryListItemComponent,
        DeliveryListComponent,
        OrderListComponent,
        OrderListItemComponent,
        EmptyComponent,
        OrdersTabComponent,
        NotificationTabComponent
    ],
    imports: [ProfileRoutingModule, CommonModule, SharedModule],
    providers: [DatePipe],
    exports: []
})

export class ProfileModule {

}