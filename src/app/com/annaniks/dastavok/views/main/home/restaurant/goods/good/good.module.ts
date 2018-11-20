import {NgModule} from "@angular/core"
import { GoodComponent } from "./good.view";
import { GoodRoutingModule } from "./good.routing.module";
import {CommonModule} from "@angular/common";
import { GoodService } from "./good.service";
import { SharedModule } from "src/app/com/annaniks/dastavok/shared/shared.module";
import { DescriptionComponent,ReviwComponent,IngredientComponent } from "src/app/com/annaniks/dastavok/components";


@NgModule({
    declarations:[GoodComponent,DescriptionComponent,ReviwComponent,IngredientComponent],
    imports:[GoodRoutingModule,CommonModule,SharedModule],
    providers:[GoodService],
    exports:[]
})
export class GoodModule{
  
}