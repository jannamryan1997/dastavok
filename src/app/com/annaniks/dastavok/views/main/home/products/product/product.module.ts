import { NgModule } from "@angular/core"
import { ProductView } from "./product.view";
import { ProductRoutingModule } from "./product.routing.module";
import { CommonModule } from "@angular/common";
import { GoodService } from "./product.service";
import { SharedModule } from "../../../../../shared/shared.module";
import {
    DescriptionComponent,
    ReviwComponent,
    IngredientComponent,
    ReviwChartComponent
} from "../../../../../components";
import { ProgressSpinnerModule } from "primeng/progressspinner";
import { NgxChartsModule } from "@swimlane/ngx-charts";


@NgModule({
    declarations: [
        ProductView,
        DescriptionComponent,
        ReviwComponent,
        IngredientComponent,
        ReviwChartComponent
    ],
    imports: [
        ProductRoutingModule,
        CommonModule,
        SharedModule,
        ProgressSpinnerModule,
        NgxChartsModule
    ],
    providers: [
        GoodService
    ],
})
export class ProductModule { }