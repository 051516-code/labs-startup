import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Message } from '../interfaces/message.interface';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private conversationKey = 'chat_conversation';
  private conversation = new BehaviorSubject<Message[]>(this.getMessagesFromLocalStorage());
  conversation$ = this.conversation.asObservable();

  constructor() {
    window.addEventListener('storage', () => {
      this.conversation.next(this.getMessagesFromLocalStorage());
    });
  }

  private getMessagesFromLocalStorage(): Message[] {
    const messages = localStorage.getItem(this.conversationKey);
    return messages ? JSON.parse(messages) : [];
  }

  private saveMessagesToLocalStorage(messages: Message[]) {
    localStorage.setItem(this.conversationKey, JSON.stringify(messages));
  }

  addMessage(sender: string, message: string) {
    const newMessage: Message = {
      sender,
      message,
      timestamp: new Date()
    };
    const currentConversation = this.getMessagesFromLocalStorage();
    currentConversation.push(newMessage);
    this.saveMessagesToLocalStorage(currentConversation);
    this.conversation.next(currentConversation);
  }
}
