import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { GoodsView } from "./goods.view";
const goodsRouter: Routes = [
    { path: "", component: GoodsView },
    { path: ":good", loadChildren: "src/app/com/annaniks/dastavok/views/main/home/restaurant/goods/good/good.module#GoodModule" }
]
@NgModule({
    imports: [RouterModule.forChild(goodsRouter)],
    exports: [RouterModule],
})

export class GoodsRoutingModule {

}