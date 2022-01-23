import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-msg',
  templateUrl: './welcome-msg.component.html',
  styleUrls: ['./welcome-msg.component.css']
})
export class WelcomeMsgComponent  {

  title = 'hello-angular';
  userName = '';

  setName(name: string) {
    this.userName = name;
  }

}
