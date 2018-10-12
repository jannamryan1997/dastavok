import { NgModule} from "@angular/core"
import { TopComponent } from "../components";
import { CommonModule } from "@angular/common";

@NgModule({
declarations:[TopComponent],
imports:[CommonModule],
exports:[TopComponent,CommonModule],
})

export class SharedModule{

}
