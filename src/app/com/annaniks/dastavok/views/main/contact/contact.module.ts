import { NgModule } from "@angular/core"
import { ContactRoutingModule } from "./contact.routing.module";
import { ContactView } from "./contact.view";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common"
import { ContactService } from "./contact.service";
import { SharedModule } from "../../../shared/shared.module";


@NgModule({
    declarations: [ContactView],
    imports: [
        ContactRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        SharedModule
    ],
    providers: [
        ContactService
    ],
    exports: []
})

export class ContactModule {}
