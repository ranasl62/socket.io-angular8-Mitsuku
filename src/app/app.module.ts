import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { AnonymousGroupChatComponent } from './anonymous-group-chat/anonymous-group-chat.component';
import { ChatWithServerComponent } from './chat-with-server/chat-with-server.component';

@NgModule({
  declarations: [
    AppComponent,
    AnonymousGroupChatComponent,
    ChatWithServerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
