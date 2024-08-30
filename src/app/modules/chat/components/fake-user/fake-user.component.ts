import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fake-user',
  templateUrl: './fake-user.component.html',
  styleUrls: ['./fake-user.component.scss'],
})
export class FakeUserComponent  {

  constructor(
    private router : Router
  ) { }

  selectUser(user:string) : void {
    localStorage.setItem('currentUserChat', user );

      // window.location.href = '/chat';
      this.router.navigate(['chat/bate'])
  }

}
