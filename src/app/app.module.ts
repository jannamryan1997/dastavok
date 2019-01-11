import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CheckToken } from './com/annaniks/dastavok/guards/checkToken.service';
import { ApiService } from './com/annaniks/dastavok/services/api.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { SignUpService } from './com/annaniks/dastavok/services/signUp.service';



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [{
    provide: 'BASE_URL', useValue: 'http://192.168.0.110:3000/'
  },
    CheckToken,
    ApiService,
    CookieService,
    SignUpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
