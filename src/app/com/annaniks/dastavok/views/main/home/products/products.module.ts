import { NgModule } from "@angular/core"
import { ProductsRoutingModule } from "./products.routing.module";
import { ProductsView } from "./products.view";
import { CommonModule } from '@angular/common';
import { SharedModule } from "../../../../shared/shared.module";
import { ProductsService } from "./products.service";


@NgModule({
    declarations: [
        ProductsView
    ],
    imports: [
        ProductsRoutingModule,
        CommonModule,
        SharedModule
    ],
    providers: [ProductsService],
    exports: [],
})

export class ProductsModule { }