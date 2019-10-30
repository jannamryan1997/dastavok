import { NgModule } from "@angular/core"
import { ProductTypesRoutingModule } from "./product-types.routing.module";
import { ProductTypesView } from "./product-types.view";
import { CommonModule } from "@angular/common";
import { ProductTypesService } from "./product-types.service";
import { NgxCarouselModule } from 'ngx-carousel';
import { GoodTypeListItemComponent, GoodTypeList } from "../../../../components";
import { SharedModule } from "../../../../shared/shared.module";
import { CompanyListComponent, CompanyListItemComponent} from "../../../../components";
@NgModule({
    declarations: [
        ProductTypesView,
        GoodTypeListItemComponent,
        GoodTypeList,
        CompanyListComponent,
        CompanyListItemComponent
    ],
    imports: [
        ProductTypesRoutingModule,
        CommonModule,
        NgxCarouselModule,
        SharedModule,
    ],
    exports: [],
    providers: [ProductTypesService]
})

export class ProductTypesModule {

}