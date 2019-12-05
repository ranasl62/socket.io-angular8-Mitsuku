import {Component, OnInit, ViewChild} from '@angular/core';
import * as socketIo from 'socket.io-client';


@Component({
  selector: 'app-chat-with-server',
  templateUrl: './chat-with-server.component.html',
  styleUrls: ['./chat-with-server.component.css']
})
export class ChatWithServerComponent implements OnInit {
  title = 'chat-client';
  message: string;
  messages: { 'end': string, message: string, time: Date }[] = [];
  private socket = socketIo('http://192.168.69.200:3000/');

  ngOnInit(): void {
    console.log(Date());
    this.socket.on('message_input', (data) => {
      this.messages = data.messages;
    });
  }

  messageSubmit(sms) {

    if (this.message.length === 0 || this.message.length >= 100) {
      alert('Enter less than 100 character at a time');
      return;
    } else {
      this.socket.emit('message_output', {
        end: 'client', message: this.message, time: new Date()
      });
      this.messages.push({
        end: 'client', message: this.message, time: new Date()
      });
    }
    this.message = '';
    sms.focus();
  }
}
