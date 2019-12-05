import {Component, OnInit} from '@angular/core';
import * as socketIo from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'chat-client';
  // message: string;
  // messages: { 'end': string, message: string, time: Date }[] = [];
  // private socket = socketIo('http://192.168.69.200:3000/');

  ngOnInit(): void {
    // console.log(Date());
    // this.socket.on('message_input', (data) => {
    //   this.messages = data.messages;
    // });
  }

  // messageSubmit() {
  //   this.socket.emit('message_output', {
  //     end: 'client', message: this.message, time: new Date()
  //   });
  //   this.messages.push({
  //     end: 'client', message: this.message, time: new Date()
  //   });
  // }
}
