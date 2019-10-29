import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing.module';
import { CheckToken } from './com/annaniks/dastavok/guards/checkToken.service';
import { ApiService } from './com/annaniks/dastavok/services/api.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { SignUpService } from './com/annaniks/dastavok/services/signUp.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    {
      provide: 'BASE_URL', useValue: 'http://192.168.0.137:13000/'
    },
    {
      provide: 'COMPANY_ID', useValue: '23'
    },
    CheckToken,
    ApiService,
    CookieService,
    SignUpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

