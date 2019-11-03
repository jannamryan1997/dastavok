import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, NavigationEnd } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dastavok';
  private _isBrowser: boolean;

  constructor(
    private _translate: TranslateService,
    private _router: Router,
    @Inject(PLATFORM_ID) private platformId
  ) {
    this._isBrowser = isPlatformBrowser(platformId);
    _translate.setDefaultLang('ru');
    this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (this._isBrowser) {
          window.scrollTo(0, 0);
        }
      }
    })
  }

  private _switchLanguage(language: string): void {
    this._translate.use(language);
  }

}
