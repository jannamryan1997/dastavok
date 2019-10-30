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
import { TranslateModule } from '@ngx-translate/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { InputPrefixDirective } from "../directives/input-prefix.directive";
import { OnlyNumber } from "../directives/onlynumber.directive";

@NgModule({
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
    InputPrefixDirective,
    OnlyNumber
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
    TranslateModule.forChild(),
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
    TranslateModule,
    InputPrefixDirective,
    OnlyNumber
  ],
  providers: []
})

export class SharedModule { }
