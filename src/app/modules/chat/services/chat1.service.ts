import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Conversation } from '../interfaces/conversation.interface';
import { Message } from '../interfaces/message.interface';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private conversations: { [key: string]: Conversation } = {};

  constructor() {
    this.loadConversations();
  }

  private loadConversations() {
    const storedConversations = localStorage.getItem('conversations');
    if (storedConversations) {
      this.conversations = JSON.parse(storedConversations);
    }
  }

  private saveConversations() {
    localStorage.setItem('conversations', JSON.stringify(this.conversations));
  }

  getConversation(conversationId: string): Observable<Conversation> {
    return new BehaviorSubject(this.conversations[conversationId] || { id: conversationId, participants: [], messages: [], lastUpdated: Date.now() });
  }

  sendMessage(conversationId: string, sender: string, message: string) {
    const conversation = this.conversations[conversationId] || { id: conversationId, participants: [], messages: [], lastUpdated: Date.now() };
    conversation.messages.push({ sender, message, timestamp: Date.now() });
    conversation.lastUpdated = Date.now();
    this.conversations[conversationId] = conversation;
    this.saveConversations();
  }
}
