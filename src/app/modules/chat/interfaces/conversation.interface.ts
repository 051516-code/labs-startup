import { Message } from "./message.interface";

export interface Conversation {
    id : string;
    participants : string[];
    messages : Message[];
    lastUpdated : number;
}