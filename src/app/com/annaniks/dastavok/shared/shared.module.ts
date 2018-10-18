import { NgModule } from "@angular/core"
import { TopbarComponent, ToolbarComponent } from "../components";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router"
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule} from "@angular/forms";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
    entryComponents:[],
    declarations: [TopbarComponent,ToolbarComponent],
    imports: [CommonModule, RouterModule,MatDialogModule,FormsModule,ReactiveFormsModule],
    exports: [TopbarComponent, CommonModule,FormsModule,ReactiveFormsModule,ToolbarComponent],
})

export class SharedModule {

}
