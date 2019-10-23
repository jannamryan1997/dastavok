import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { ProductsView } from "./products.view";

const productsRoutes: Routes = [
    { path: "", component: ProductsView },
    { path: ":good", loadChildren: () => import('./product/product.module').then(m => m.ProductModule) }
]
@NgModule({
    imports: [RouterModule.forChild(productsRoutes)],
    exports: [RouterModule],
})

export class ProductsRoutingModule {}