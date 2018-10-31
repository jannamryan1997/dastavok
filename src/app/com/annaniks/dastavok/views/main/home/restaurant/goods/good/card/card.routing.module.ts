import { NgModule } from "@angular/core"
import { CardView } from "./card.view";
import { RouterModule, Routes } from "@angular/router"

const cartRouter: Routes = [
    { path: "", component: CardView },
  
]

@NgModule({
    imports: [RouterModule.forChild(cartRouter)],
    exports: [RouterModule]
})

export class CardRoutingModule {

}