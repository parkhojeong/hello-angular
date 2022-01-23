import {Component} from '@angular/core';
import {I18nSupportService} from "../i18n-support.service";

@Component({
  selector: 'app-welcome-msg',
  templateUrl: './welcome-msg.component.html',
  styleUrls: ['./welcome-msg.component.css']
})
export class WelcomeMsgComponent {

  title = 'hello-angular';
  userName = '';
  welcomeMsg = '';

  constructor(public i18nSupporter: I18nSupportService) {
  }

  setName(name: string) {
    this.userName = name;
  }

  showWelcomeMsg () {
    this.welcomeMsg = this.i18nSupporter.getWelcomeMsgByCode(this.userName);
  }

}
