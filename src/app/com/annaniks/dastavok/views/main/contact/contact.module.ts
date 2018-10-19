import {NgModule} from "@angular/core"
import { ContactRoutingModule } from "./contact.routing.module";
import { ContactView } from "./contact.view";
import {ReactiveFormsModule,FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common"

@NgModule({
    declarations:[ContactView],
    imports:[ContactRoutingModule,ReactiveFormsModule,FormsModule,CommonModule],
    exports:[]
})

export class ContactModule {

   
}