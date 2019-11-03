import { NgModule } from "@angular/core"
import { BasketRoutingModule } from "./basket.routing.module";
import { BasketView } from "./basket.view";
import { CardListComponent, CardListItemComponent, TotalCoastComponent } from "./../../../../components";
import { CommonModule } from "@angular/common";
import { BasketService } from "./basket.service";
import { SharedModule } from "../../../../shared/shared.module";

@NgModule({
    declarations: [
        BasketView,
        CardListComponent,
        CardListItemComponent,
        TotalCoastComponent
    ],
    imports: [
        BasketRoutingModule,
        CommonModule,
        SharedModule
    ],
    providers: [
        BasketService
    ],
    exports: []
})

export class BasketModule { }