import { NgModule } from "@angular/core"
import { ProductTypesRoutingModule } from "./product-types.routing.module";
import { ProductTypesView } from "./product-types.view";
import { CommonModule } from "@angular/common";
import { RestaurantService } from "./product-types.service";
import { NgxCarouselModule } from 'ngx-carousel';
import { GoodTypeListItemComponent, GoodTypeList } from "../../../../components";
import { SharedModule } from "../../../../shared/shared.module";
@NgModule({
    declarations: [
        ProductTypesView,
        GoodTypeListItemComponent,
        GoodTypeList
    ],
    imports: [
        ProductTypesRoutingModule,
        CommonModule,
        NgxCarouselModule,
        SharedModule
    ],
    exports: [],
    providers: [RestaurantService]
})

export class ProductTypesModule {

}