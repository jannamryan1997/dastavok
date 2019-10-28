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
} from "../components";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router"
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { ClickOutsideModule } from 'ng-click-outside';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { NgxCarouselModule } from "ngx-carousel";
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


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
        HttpClientModule,
        TranslateModule.forChild({
          loader: {
            provide: TranslateLoader,
            useFactory: createTranslateLoader,
            deps: [HttpClient]
          }
        })
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
        TranslateModule,
    ],
    providers: []
})

export class SharedModule {

}
