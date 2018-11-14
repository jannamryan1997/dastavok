import { NgModule } from "@angular/core"
import { TopbarComponent, ToolbarComponent, LoadingComponent,RatingComponent } from "../components";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router"
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule} from "@angular/forms";
import {ReactiveFormsModule} from "@angular/forms";
import { ClickOutsideModule } from 'ng-click-outside';
import {ProgressSpinnerModule} from 'primeng/progressspinner';



@NgModule({
    entryComponents:[],
    declarations: [TopbarComponent,ToolbarComponent,LoadingComponent,RatingComponent],
    imports: [CommonModule, RouterModule,MatDialogModule,FormsModule,ReactiveFormsModule,ClickOutsideModule,ProgressSpinnerModule],
    exports: [TopbarComponent, CommonModule,FormsModule,ReactiveFormsModule,ToolbarComponent,RatingComponent,ClickOutsideModule,LoadingComponent],
    providers:[]
})

export class SharedModule {

}
