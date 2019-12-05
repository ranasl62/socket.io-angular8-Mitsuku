import {Component, OnInit, ViewChild} from '@angular/core';
import * as socketIo from 'socket.io-client';

@Component({
  selector: 'app-anonymous-group-chat',
  templateUrl: './anonymous-group-chat.component.html',
  styleUrls: ['./anonymous-group-chat.component.css']
})
export class AnonymousGroupChatComponent implements OnInit {
  title = 'chat-client';
  message: string;
  messages: { 'end': string, message: string, time: Date }[] = [];
  private socket = socketIo('http://192.168.69.200:3000/');

  ngOnInit(): void {
    this.socket.on('message_input_g', (data) => {
      this.messages = data.messages_g;
    });
  }

  messageSubmit(sms) {
    if (this.message.length === 0 || this.message.length >= 100) {
      alert('Enter less than 100 character at a time');
      return;
    } else {
      this.socket.emit('message_output_g', {
        end: 'client', message: this.message, time: new Date()
      });
      this.messages.push({
        end: 'client', message: this.message, time: new Date()
      });
    }
    sms.focus();
    this.message = '';
  }
}
