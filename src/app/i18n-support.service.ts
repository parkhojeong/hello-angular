import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class I18nSupportService {
  private welcomeMsg: {[key in string] : string};
  langCode = 'ko';

  constructor() {
    this.welcomeMsg = {
      'ko': '안녕하세요',
      'en': 'Hello',
      'jp': '오하요',
      'fr': 'Bonjour'
    }
  }

  getWelcomeMsgByCode(userName: string) {
    console.log(this.langCode)
    const helloMsg = this.welcomeMsg[this.langCode];
    console.log({helloMsg})
    return `${helloMsg}, ${userName}`
  }
}
