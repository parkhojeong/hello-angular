import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WelcomeMsgComponent } from './welcome-msg/welcome-msg.component';
import { LangSelectorComponent } from './lang-selector/lang-selector.component';
import {I18nSupportService} from "./i18n-support.service";
import { LangSelectorBtnPipe } from './lang-selector/lang-selector-btn.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeMsgComponent,
    LangSelectorComponent,
    LangSelectorBtnPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [I18nSupportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
