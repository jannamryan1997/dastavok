import { NgModule } from "@angular/core"
import { PaymentRoutingModule } from "./payment.routing.module";
import { PaymentView } from "./payment.view";
import { CommonModule } from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [PaymentView],
    imports: [PaymentRoutingModule, CommonModule,ReactiveFormsModule],
    exports: [],
})

export class PaymentModule  {

   
}