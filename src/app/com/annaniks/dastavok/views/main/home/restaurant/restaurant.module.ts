import {NgModule} from "@angular/core"
import { RestaurantRoutingModule } from "./restaurant.routing.module";
import { RestaurantView } from "./restaurant.view";
import {CommonModule} from "@angular/common"
@NgModule({
    declarations:[RestaurantView],
    imports:[RestaurantRoutingModule,CommonModule],
    exports:[],
})

export class RestaurantModule{

}