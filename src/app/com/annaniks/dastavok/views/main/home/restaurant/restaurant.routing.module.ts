import { NgModule } from "@angular/core"
import {RouterModule,Routes} from "@angular/router"
import { RestaurantView } from "./restaurant.view";
const router:Routes=[
    {path:"",component:RestaurantView}
]
@NgModule({

    imports: [RouterModule.forChild(router)],
    exports: [RouterModule],
})
export class RestaurantRoutingModule {

}