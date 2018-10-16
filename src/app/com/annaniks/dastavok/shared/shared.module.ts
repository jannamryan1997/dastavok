import { NgModule } from "@angular/core"
import { TopbarComponent } from "../components";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router"
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule} from "@angular/forms";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    entryComponents:[],
    declarations: [TopbarComponent],
    imports: [CommonModule, RouterModule,MatDialogModule,FormsModule,ReactiveFormsModule],
    exports: [TopbarComponent, CommonModule,FormsModule,ReactiveFormsModule],
})

export class SharedModule {

}
