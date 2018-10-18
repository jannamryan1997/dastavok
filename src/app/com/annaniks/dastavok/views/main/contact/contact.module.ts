import {NgModule} from "@angular/core"
import { ContactRoutingModule } from "./contact.routing.module";
import { ContactView } from "./contact.view";


@NgModule({
    declarations:[ContactView],
    imports:[ContactRoutingModule],
    exports:[]
})

export class ContactModule{}