import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ChatWithServerComponent} from './chat-with-server/chat-with-server.component';
import {AnonymousGroupChatComponent} from './anonymous-group-chat/anonymous-group-chat.component';


const routes: Routes = [
  {path: 'with-server', component: ChatWithServerComponent},
  {path: 'with-group', component: AnonymousGroupChatComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
