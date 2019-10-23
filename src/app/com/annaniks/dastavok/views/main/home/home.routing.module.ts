import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { HomeView } from "./home.view";
import { AuthGuard } from "../../../guards/authguard.service";


const router: Routes = [
    {
        path: "", component: HomeView, children: [
            { path: "", loadChildren: "./product-types/product-types.module#ProductTypesModule" },
            { path: "card", loadChildren: "./card/card.module#CardModule", canActivate: [AuthGuard] },
            { path: "search", loadChildren: "./search/search.module#SearchModule" },
            { path: ":goodTypeId/products", loadChildren: "./products/products.module#ProductsModule" }
        ]
    }
]
@NgModule({
    imports: [RouterModule.forChild(router)],
    exports: [RouterModule]
})
export class HomeRoutingModule {

}