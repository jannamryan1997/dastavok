import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dastavok';
  user = {
    name: 'Arthur',
    age: 42
  };

constructor(private translate: TranslateService){
  translate.setDefaultLang('ru');
}
switchLanguage(language: string) {
  this.translate.use(language);
}

}
