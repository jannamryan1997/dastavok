import { NgModule } from "@angular/core"
import { ProductView } from "./product.view";
import { ProductRoutingModule } from "./product.routing.module";
import { CommonModule } from "@angular/common";
import { GoodService } from "./product.service";
import { SharedModule } from "src/app/com/annaniks/dastavok/shared/shared.module";
import { DescriptionComponent, ReviwComponent, IngredientComponent } from "src/app/com/annaniks/dastavok/components";
import { ProgressSpinnerModule } from "primeng/progressspinner";


@NgModule({
    declarations: [
        ProductView,
        DescriptionComponent,
        ReviwComponent,
        IngredientComponent
    ],
    imports: [
        ProductRoutingModule,
        CommonModule,
        SharedModule,
        ProgressSpinnerModule
    ],
    providers: [
        GoodService
    ],
    exports: []
})
export class ProductModule {

}