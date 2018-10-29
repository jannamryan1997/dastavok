import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { RestaurantView } from "./restaurant.view";

const restaurantRouter: Routes = [
    { path: "", component: RestaurantView },
    { path: ":goodName", loadChildren: "src/app/com/annaniks/dastavok/views/main/home/restaurant/goods/goods.module#GoodsModule" }
]
@NgModule({
    imports: [RouterModule.forChild(restaurantRouter)],
    exports: [RouterModule],
})

export class RestaurantRoutingModule {

}