import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SearchView } from "./search.view";

const searchRoutes: Routes = [
    { path: "", component: SearchView }
]

@NgModule({
    imports: [RouterModule.forChild(searchRoutes)],
    exports: [RouterModule]
})

export class SearchRoutingModule {}