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
  ErrorComponent,
  SliderComponent,
  SkeletionListComponent,
  SkeletionListItemComponent,
  EmptyResultComponent
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
import { InputPrefixDirective, OnlyNumber, FocusNextInputDriective } from "../directives";
import { NgxMaskModule } from 'ngx-mask';
import { SlicetextPipe } from "../pipe/slicetext.pipe";
import { Ng5SliderModule } from 'ng5-slider';

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
    ErrorComponent,
    SliderComponent,
    InputPrefixDirective,
    OnlyNumber,
    SlicetextPipe,
    FocusNextInputDriective,
    SkeletionListComponent,
    SkeletionListItemComponent,
    EmptyResultComponent,
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
    NgxMaskModule.forRoot(),
    NgxChartsModule,
    Ng5SliderModule
  ],
  exports: [
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
    OnlyNumber,
    NgxMaskModule,
    SlicetextPipe,
    FocusNextInputDriective,
    SkeletionListComponent,
    SkeletionListItemComponent,
    EmptyResultComponent,
  ],
  providers: []
})

export class SharedModule { }
