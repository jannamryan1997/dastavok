import { NgModule } from "@angular/core"
import { ProductView } from "./product.view";
import { RouterModule, Routes } from "@angular/router";

const goodRouter: Routes = [
    { path: "", component: ProductView },
//    { path: ":card", loadChildren: "src/app/com/annaniks/dastavok/views/main/home/restaurant/goods/good/card/card.module#CardModule" }
]
@NgModule({
    imports: [RouterModule.forChild(goodRouter)],
    exports: [RouterModule]
})
export class ProductRoutingModule {

}