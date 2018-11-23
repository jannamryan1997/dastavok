import { NgModule } from "@angular/core"
import { CardRoutingModule } from "./card.routing.module";
import { CardView } from "./card.view";
import { CardListComponent, CardListItemComponent, TotalCoastComponent } from "src/app/com/annaniks/dastavok/components";
import { CommonModule } from "@angular/common";
import { CardService } from "./card.service";

@NgModule({
    declarations: [CardView, CardListComponent, CardListItemComponent,TotalCoastComponent],
    imports: [CardRoutingModule, CommonModule],
    providers: [CardService],
    exports: []
})

export class CardModule { }