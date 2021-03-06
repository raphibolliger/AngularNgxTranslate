import { Component, ElementRef, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string = 'AngularLocalization';
  userName: string = 'Raphael Bolliger';
  now: Date = new Date();
  minutes: number = 0;
  gender: string = "?";

  constructor(public translate: TranslateService) {
    translate.setDefaultLang("en");
    translate.use("en");
  }

  public showWarning(): void {
    this.translate.get("HOME.ALERTMESSAGE").subscribe(
      (text: string) => { alert(text); }
    );
  }

}