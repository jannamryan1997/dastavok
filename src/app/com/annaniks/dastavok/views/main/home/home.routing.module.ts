import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { HomeView } from "./home.view";


const router: Routes = [
    {
        path: "", component: HomeView, children: [
            { path: "", redirectTo: "information", pathMatch: "full" },
            { path: "company", loadChildren: "src/app/com/annaniks/dastavok/views/main/home/company/company.module#CompanyModule" },
            { path: "information", loadChildren: "src/app/com/annaniks/dastavok/views/main/home/information/information.module#InformationModule" },
            { path: "restaurant/:companyId", loadChildren: "src/app/com/annaniks/dastavok/views/main/home/restaurant/restaurant.module#RestaurantModule" }
        ]
    }
]
@NgModule({
    imports: [RouterModule.forChild(router)],
    exports: [RouterModule]
})
export class HomeRoutingModule {

}