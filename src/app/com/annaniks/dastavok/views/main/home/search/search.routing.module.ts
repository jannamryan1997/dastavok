import { NgModule } from "@angular/core";
import {RouterModule,Routes} from "@angular/router";
import { SearchView } from "./search.view";

const searchRouter:Routes=[
    {path:"",component:SearchView}
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(searchRouter)],
    exports: [RouterModule]
})

export class SearchRoutingModule {

}