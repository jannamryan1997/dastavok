import {NgModule} from "@angular/core"
import { GoodsRoutingModule } from "./goods.routing.module";
import { GoodsView } from "./goods.view";
import {CommonModule} from '@angular/common';
import { SharedModule } from "src/app/com/annaniks/dastavok/shared/shared.module";


@NgModule({
    declarations:[GoodsView],
    imports:[GoodsRoutingModule,CommonModule,SharedModule],
    exports:[],
})

export class GoodsModule{}