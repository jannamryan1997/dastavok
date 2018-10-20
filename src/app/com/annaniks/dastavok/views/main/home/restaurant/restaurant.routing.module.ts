import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { RestaurantView } from "./restaurant.view";

const restaurantRouter: Routes = [
    { path: "", component: RestaurantView }
]
@NgModule({
    imports: [RouterModule.forChild(restaurantRouter)],
    exports: [RouterModule],
})

export class RestaurantRoutingModule {

}