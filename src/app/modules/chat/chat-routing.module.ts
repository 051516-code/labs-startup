import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatPage } from './chat.page';
import { FakeUserComponent } from './components/fake-user/fake-user.component';

const routes: Routes = [
  {
    path: '',
    component: FakeUserComponent
  },
  {
    path : 'bate',
    component: ChatPage
  },
  {
    path: '**',
    redirectTo: ''
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatPageRoutingModule {}
