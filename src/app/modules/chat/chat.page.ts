import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  user : string = '';
  constructor() { }

  ngOnInit() {
       // Obtener el usuario logueado desde localStorage
       const loggedUser = localStorage.getItem('currentUserChat');
       this.user = loggedUser ? loggedUser : 'Juan'; // Asigna un valor predeterminado si no hay usuario en localStorage
     }
  }


