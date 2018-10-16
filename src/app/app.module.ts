import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {RouterModule,Routes} from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const router:Routes=[
  {path:"",loadChildren:"./com/annaniks/dastavok/views/main/main.module#MainModule"},

]

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router),
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
