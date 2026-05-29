import { MessageType } from '../enums/Message-type';

export interface IMessage {
    text: string;
    type: MessageType;
}