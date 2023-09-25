import process from 'node:process';

import { Injectable } from '@nestjs/common';
import { Telegraf } from 'telegraf';

import { OneTimeCodeService } from '@/app/one-time-code/one-time-code.service';
import { Logger } from '@/common/logger/logger';

@Injectable()
export class TelegramService {
  private readonly logger = new Logger(TelegramService.name);
  private botToken: string;
  private bot: Telegraf;

  async generateTelegramAuthLink(id: number): Promise<string> {
    const code = await this.oneTimeCodeService.createOneTimeCode(id.toString());
    const link = `https://t.me/${this.bot.botInfo?.username}?code=${code}`;
    this.logger.log(`Telegram auth link: ${link}`);
    return link;
  }

  constructor(private readonly oneTimeCodeService: OneTimeCodeService) {
    this.botToken = process.env.TELEGRAM_BOT_TOKEN as string;
    this.bot = new Telegraf(this.botToken);
    this.bot.launch();
    this.logger.log('Telegram bot started');

    this.bot.start(async (context) => {
      this.logger.log('Telegram auth bot started');

      // eslint-disable-next-line camelcase
      const { id } = context.from;
      const authlink = await this.generateTelegramAuthLink(id);
      await context.reply(authlink);
    });
  }

  async generateTelegramBotLink(): Promise<string> {
    return 'https://t.me/secretSantaAuthBot';
  }

  async validateTelegramAuthCode(id: string, code: string): Promise<boolean> {
    return await this.oneTimeCodeService.validateOneTimeCode(id, code);
  }

  async deleteTelegramAuthCode(id: string): Promise<boolean> {
    return await this.oneTimeCodeService.deleteOneTimeCode(id);
  }
}
