import {NgModule} from "@angular/core"
import { CardRoutingModule } from "./card.routing.module";
import { CardView } from "./card.view";
import { CardListComponent,CardListItemComponent } from "src/app/com/annaniks/dastavok/components";
import {CommonModule} from "@angular/common"
@NgModule({
    declarations:[CardView,CardListComponent,CardListItemComponent],
    imports:[CardRoutingModule,CommonModule],
    exports:[]
})

export class CardModule{}