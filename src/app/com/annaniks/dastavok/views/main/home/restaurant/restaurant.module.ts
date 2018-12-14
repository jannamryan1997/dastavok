import { NgModule } from "@angular/core"
import { RestaurantRoutingModule } from "./restaurant.routing.module";
import { RestaurantView } from "./restaurant.view";
import { CommonModule } from "@angular/common";
import { RestaurantService } from "./restaurant.service";
import { NgxCarouselModule } from 'ngx-carousel';
import { GoodTypeListItemComponent, GoodTypeList } from "../../../../components";
import { SharedModule } from "src/app/com/annaniks/dastavok/shared/shared.module";
@NgModule({
    declarations: [RestaurantView, GoodTypeListItemComponent, GoodTypeList],
    imports: [RestaurantRoutingModule, CommonModule, NgxCarouselModule,SharedModule],
    exports: [],
    providers: [RestaurantService]
})

export class RestaurantModule {

}