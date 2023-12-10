import * as console from 'node:console';
import process from 'node:process';

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {
  Account,
  ExternalProfile,
  ExternalProfileProvider,
} from '@prisma/client';
import { Telegraf } from 'telegraf';

import { AccountService } from '@/app/account/account.service';
import { AuthResponse } from '@/app/account/types';
import { AccountSessionService } from '@/app/account-session/account-session.service';
import { RequestContext } from '@/app/auth/request-context-extractor/interfaces';
import { ProfileService } from '@/app/profile/profile.service';
import {
  CryptoService,
  RandomStringType,
} from '@/common/crypto/crypto.service';
import { Logger } from '@/common/logger/logger';

@Injectable()
export class TelegramService {
  private readonly logger = new Logger(TelegramService.name);
  private readonly botToken: string;
  private static bot: Telegraf;

  constructor(
    private readonly accountService: AccountService,
    private readonly accountSessionService: AccountSessionService,
    private readonly profileService: ProfileService,
    private readonly cryptoService: CryptoService,
    private readonly jwtService: JwtService,
  ) {
    console.log('TelegramService constructor AAAAAAAAAAAAAAAAA');
    this.botToken = process.env.TELEGRAM_BOT_TOKEN as string;
    if (!TelegramService.bot) {
      // Check if bot is already started
      TelegramService.bot = new Telegraf(this.botToken);
      TelegramService.bot.launch();
      this.logger.log('Telegram bot started');

      TelegramService.bot.start(async (context) => {
        this.logger.log('Telegram auth bot started');

        process.on('exit', (code) => {
          TelegramService.bot.stop();
          this.logger.log(`Bot stopped with code: ${code}`);
        });

        // eslint-disable-next-line camelcase
        const { id, username } = context.from;
        if (!id || !username) {
          this.logger.error('Telegram auth bot started with invalid user');
          return;
        }
        this.logger.log('Telegram auth bot started with user', id, username);
        const authLink = await this.generateTelegramAuthLink(id, username);
        const message = await context.reply(authLink);

        // delete message for security
        setTimeout(() => {
          context.deleteMessage(message.message_id);
          // eslint-disable-next-line no-magic-numbers
        }, 1000 * 60); // 1 minute
      });
    }
  }

  async sendTelegramMessage(chatId: string, message: string): Promise<void> {
    await TelegramService.bot.telegram.sendMessage(chatId, message, {
      // eslint-disable-next-line camelcase
      parse_mode: 'Markdown',
    });
  }

  async generateTelegramAuthLink(
    telegramId: number,
    username: string,
  ): Promise<string> {
    const jwt = await this.jwtService.signAsync({ telegramId, username });
    return `${process.env.SECRET_SANTA_DOMAIN}/auth/telegram?token=${jwt}`;
  }

  async generateTelegramBotLink(): Promise<string> {
    return 'https://t.me/secretSantaAuthBot';
  }

  async loginWithTelegram(
    jwt: string,
    context: RequestContext,
    ip: string,
  ): Promise<AuthResponse> {
    const { telegramId, username } = await this.jwtService.verifyAsync(jwt);

    if (!telegramId || !username) {
      throw new Error('Invalid token');
    }

    let account: Account | null;
    let profile: ExternalProfile | null =
      await this.profileService.getProfileByExternalId(
        telegramId.toString(),
        ExternalProfileProvider.TELEGRAM,
      );
    if (profile) {
      this.logger.log('Profile found, get account');
      account = await this.accountService.getAccountByProfile(profile);
    } else {
      this.logger.log('Profile not found, create profile');
      profile = await this.profileService.createProfile({
        externalId: telegramId.toString(),
        provider: ExternalProfileProvider.TELEGRAM,
        username,
      });
      this.logger.log('Get account');
      account = await this.accountService.getAccountByProfile(profile);
    }

    if (!account) {
      throw new Error('Account not found');
    }

    const token = await this.cryptoService.generateRandomString(
      RandomStringType.ACCESS_TOKEN,
    );

    await this.accountSessionService.createAccountSession(
      account.id,
      token,
      ip,
      context.req.headers['user-agent'],
    );

    return {
      token,
      account,
    };
  }
}
