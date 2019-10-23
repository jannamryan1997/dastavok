import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { HomeView } from "./home.view";
import { AuthGuard } from "../../../guards/authguard.service";


const router: Routes = [
    {
        path: "", component: HomeView, children: [
            { path: "", loadChildren: () => import('./product-types/product-types.module').then(m => m.ProductTypesModule) },
            { path: "card", loadChildren: () => import('./card/card.module').then(m => m.CardModule), canActivate: [AuthGuard] },
            { path: "search", loadChildren: () => import('./search/search.module').then(m => m.SearchModule) },
            { path: ":goodTypeId/products", loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) }
        ]
    }
]
@NgModule({
    imports: [RouterModule.forChild(router)],
    exports: [RouterModule]
})
export class HomeRoutingModule {

}