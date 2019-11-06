import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing.module';
import { CheckToken } from './com/annaniks/dastavok/guards/checkToken.service';
import { ApiService } from './com/annaniks/dastavok/services/api.service';
import { CookieService, CookieModule, COOKIE_OPTIONS, CookieOptionsProvider } from 'ngx-cookie';
import { SignUpService } from './com/annaniks/dastavok/services/signUp.service';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { ApiInterceptor } from './com/annaniks/dastavok/interceptors/api.interceptor';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';


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
    CookieModule.forRoot(),
    TranslateModule.forRoot(
      {
        loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient]
        }
      }
    )
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    },
    {
      provide: 'BASE_URL', useValue: 'http://annaniks.com:16004/'
    },
    {
      provide: 'FILE_URL', useValue: 'http://annaniks.com:16000/static/company/'
    },
    {
      provide: 'ADMIN_FILE_URL', useValue: 'http://annaniks.com:4454/files/'
    },
    {
      provide: 'COMPANY_ID', useValue: 23
    },
    CheckToken,
    ApiService,
    CookieService,
    SignUpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
