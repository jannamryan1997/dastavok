import { NgModule } from "@angular/core"
import { BasketView } from "./basket.view";
import { RouterModule, Routes } from "@angular/router"

const basketRoutes: Routes = [
    { path: "", component: BasketView },
  
]

@NgModule({
    imports: [RouterModule.forChild(basketRoutes)],
    exports: [RouterModule]
})

export class BasketRoutingModule {

}