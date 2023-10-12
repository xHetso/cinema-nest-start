import { Telegraf } from 'telegraf';
import { ITelegramOptions } from './telegram.interface';
import { ExtraReplyMessage } from 'telegraf/typings/telegram-types';
export declare class TelegramService {
    bot: Telegraf;
    options: ITelegramOptions;
    constructor();
    sendMessage(msg: string, options?: ExtraReplyMessage, chatId?: string): Promise<void>;
    sendPhoto(photo: string, msg?: string, chatId?: string): Promise<void>;
}
