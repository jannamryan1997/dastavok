import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { ProductsView } from "./products.view";

const productsRoutes: Routes = [
    { path: "", component: ProductsView },
    { path: ":goodId", loadChildren: "./product/product.module#ProductModule" }
]
@NgModule({
    imports: [RouterModule.forChild(productsRoutes)],
    exports: [RouterModule],
})

export class ProductsRoutingModule {}