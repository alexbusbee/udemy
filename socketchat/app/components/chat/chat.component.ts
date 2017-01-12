import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'chat',
  templateUrl: 'chat.component.html',
})
export class ChatComponent  { 
  name = 'Angular';
  messages: any = [];
  message: string;

  constructor() {

  }

  sendMessage() {
    console.log(this.message);
  }
}
