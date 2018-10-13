import {NgModule} from "@angular/core"
import { RestaurantView } from "./restaurant.view";
import { RestaurantRoutingModule } from "./restaurant.routing.module";

@NgModule({
    declarations:[RestaurantView],
    imports:[RestaurantRoutingModule],
    exports:[],
})
export class RestaurantModule{

}