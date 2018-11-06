import {NgModule} from "@angular/core"
import { RestaurantRoutingModule } from "./restaurant.routing.module";
import { RestaurantView } from "./restaurant.view";
import {CommonModule} from "@angular/common";
import { RestaurantService } from "./restaurant.service";
import { GoodTypeListItemComponent,GoodTypeList } from "../../../../components";

@NgModule({
    declarations:[RestaurantView,GoodTypeListItemComponent,GoodTypeList],
    imports:[RestaurantRoutingModule,CommonModule],
    exports:[],
    providers:[RestaurantService]
})

export class RestaurantModule{

}