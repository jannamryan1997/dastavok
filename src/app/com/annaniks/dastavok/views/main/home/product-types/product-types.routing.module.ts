import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { ProductTypesView } from "./product-types.view";

const productTypesRoutes: Routes = [
    { path: "", component: ProductTypesView }
]
@NgModule({
    imports: [RouterModule.forChild(productTypesRoutes)],
    exports: [RouterModule],
})

export class ProductTypesRoutingModule {

}