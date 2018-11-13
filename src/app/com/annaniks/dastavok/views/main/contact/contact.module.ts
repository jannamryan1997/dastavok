import {NgModule} from "@angular/core"
import { ContactRoutingModule } from "./contact.routing.module";
import { ContactView } from "./contact.view";
import {ReactiveFormsModule,FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common"
import { ContactService } from "./contact.service";

@NgModule({
    declarations:[ContactView],
    imports:[ContactRoutingModule,ReactiveFormsModule,FormsModule,CommonModule],
    providers:[ContactService],
    exports:[]
})

export class ContactModule {

   
}