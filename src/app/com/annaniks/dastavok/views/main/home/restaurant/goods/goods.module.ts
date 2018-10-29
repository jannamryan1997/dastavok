import {NgModule} from "@angular/core"
import { GoodsRoutingModule } from "./goods.routing.module";
import { GoodsView } from "./goods.view";
import {CommonModule} from '@angular/common';
import { GoodsListComponent, GoodsListItemComponent } from "src/app/com/annaniks/dastavok/components";


@NgModule({
    declarations:[GoodsView,GoodsListComponent, GoodsListItemComponent],
    imports:[GoodsRoutingModule,CommonModule],
    exports:[],
})

export class GoodsModule{}