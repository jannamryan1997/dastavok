import { NgModule } from "@angular/core"
import {
    TopbarComponent,
    ToolbarComponent,
    LoadingComponent,
    RatingComponent,
    PaginatorComponent,
    SlideNawComponent,
    FiltersListComponent,
    GoodsListComponent,
    GoodsListItemComponent,
    LeftMenuComponent,
    ErrorComponent,
    SliderComponent,
    CompanyListComponent,
    CompanyListItemComponent
} from "../components";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router"
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { ClickOutsideModule } from 'ng-click-outside';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MessageService } from 'primeng/components/common/messageservice';
import { NgxCarouselModule } from "ngx-carousel";
import { ReviwChartComponent } from "../components/good-tabs/reviw-chart/reviw-chart.component";
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
    entryComponents: [],
    declarations: [
        TopbarComponent,
        ToolbarComponent,
        LoadingComponent,
        RatingComponent,
        PaginatorComponent,
        SlideNawComponent,
        FiltersListComponent,
        GoodsListComponent,
        GoodsListItemComponent,
        LeftMenuComponent,
        ErrorComponent,
        SliderComponent,
        CompanyListComponent,
        CompanyListItemComponent,
        ReviwChartComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        MatDialogModule,
        FormsModule,
        ReactiveFormsModule,
        ClickOutsideModule,
        ProgressSpinnerModule,
        NgxCarouselModule,
        NgxChartsModule
    ],
    exports: [
        LeftMenuComponent,
        TopbarComponent,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ToolbarComponent,
        RatingComponent,
        ClickOutsideModule,
        LoadingComponent,
        PaginatorComponent,
        SlideNawComponent,
        FiltersListComponent,
        GoodsListComponent,
        GoodsListItemComponent,
        ErrorComponent,
        SliderComponent,
        ReviwChartComponent
    ],
    providers: [MessageService]
})

export class SharedModule {

}
