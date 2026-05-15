import { Injectable } from "@angular/core";
import { IMessage } from "../../interfaces/IMessage";
import { MessageType } from "../../enums/Message-type";

@Injectable({
    providedIn: 'root',
})
export class MessageService {
    
    messageList: IMessage[] = [];
    
    addMessage(type: MessageType, text: string): void {
        const newMessage: IMessage = { text, type};
        this.messageList = [newMessage, ...this.messageList];
        
        setTimeout(() => {
            console.log('TIMEOUT WORK');
            this.closeMessage(newMessage);
        }, 5000);
    }
    
    closeMessage(CurrentMessage: IMessage): void {
        this.messageList = this.messageList.filter((message: IMessage) => message !== CurrentMessage)
    }

}
