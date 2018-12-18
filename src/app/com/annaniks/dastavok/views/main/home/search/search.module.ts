import { NgModule } from "@angular/core"
import { SearchRoutingModule } from "./search.routing.module";
import { SearchView} from "./search.view";
import { CommonModule } from "@angular/common";
import { SearchService } from "./search.service";
import { SharedModule } from "../../../../shared/shared.module";

@NgModule({
    declarations: [SearchView],
    imports: [SearchRoutingModule,CommonModule,SharedModule],
    providers:[SearchService]
})

export class SearchModule {

}