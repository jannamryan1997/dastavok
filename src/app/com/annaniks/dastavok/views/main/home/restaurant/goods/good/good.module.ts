import {NgModule} from "@angular/core"
import { GoodComponent } from "./good.view";
import { GoodRoutingModule } from "./good.routing.module";
import {CommonModule} from "@angular/common";
import { GoodService } from "./good.service";
import { SharedModule } from "src/app/com/annaniks/dastavok/shared/shared.module";
import { DescriptionComponent,ReviwComponent,IngredientComponent,ReviwChartComponent } from "src/app/com/annaniks/dastavok/components";
import { ProgressSpinnerModule } from "primeng/progressspinner";


@NgModule({
    declarations:[GoodComponent,DescriptionComponent,ReviwComponent,IngredientComponent,ReviwChartComponent],
    imports:[GoodRoutingModule,CommonModule,SharedModule,ProgressSpinnerModule],
    providers:[GoodService],
    exports:[]
})
export class GoodModule{
  
}