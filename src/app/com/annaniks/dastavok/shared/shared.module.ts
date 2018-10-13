import { NgModule } from "@angular/core"
import { TopbarComponent } from "../components";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router"
@NgModule({
    declarations: [TopbarComponent],
    imports: [CommonModule, RouterModule],
    exports: [TopbarComponent, CommonModule],
})

export class SharedModule {

}
