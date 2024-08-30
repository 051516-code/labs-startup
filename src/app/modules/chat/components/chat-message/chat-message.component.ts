import { Component, Input } from '@angular/core';
import { Message } from '../../interfaces/message.interface';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss'],
})
export class ChatMessageComponent {
@Input() message! : Message;

  constructor() { }

  formatTimestamp(timestamp: Date): string {
    // Aquí puedes definir cómo deseas formatear la fecha
    const date = new Date(timestamp);
    return `${date.getHours()}:${date.getMinutes()}`;
  }

}
