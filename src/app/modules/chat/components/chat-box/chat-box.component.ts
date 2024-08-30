// chat-box.component.ts
import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Message } from '../../interfaces/message.interface';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss']
})
export class ChatBoxComponent implements OnInit {
  newMessage: string = '';
  messages: Message[] = [];
  currentUser: string = '';

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.currentUser = localStorage.getItem('currentUserChat') || 'Juan'; // Usa Juan como valor predeterminado si no hay selección
    this.chatService.conversation$.subscribe(messages => {
      this.messages = messages;
    });
  }


  formatTimestamp(timestamp: Date): string {
    // Aquí puedes definir cómo deseas formatear la fecha
    const date = new Date(timestamp);
    return `${date.getHours()}:${date.getMinutes()}`;
  }
  
  sendMessage(): void {
    if (this.newMessage.trim()) {
      this.chatService.addMessage(this.currentUser, this.newMessage);
      this.newMessage = '';
    }
  }
}
