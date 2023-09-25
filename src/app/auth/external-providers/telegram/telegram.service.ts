import process from 'node:process';

import { Injectable } from '@nestjs/common';
import {
  Account,
  ExternalProfile,
  ExternalProfileProvider,
} from '@prisma/client';
import { Telegraf } from 'telegraf';

import { AccountService } from '@/app/account/account.service';
import { ExternalProviders } from '@/app/auth/external-providers/external-providers.module';
import { OneTimeCodeService } from '@/app/one-time-code/one-time-code.service';
import { ProfileService } from '@/app/profile/profile.service';
import {
  CryptoService,
  RandomStringType,
} from '@/common/crypto/crypto.service';
import { Logger } from '@/common/logger/logger';

@Injectable()
export class TelegramService {
  private readonly logger = new Logger(TelegramService.name);
  private botToken: string;
  private bot: Telegraf;

  constructor(
    private readonly oneTimeCodeService: OneTimeCodeService,
    private readonly accountService: AccountService,
    private readonly profileService: ProfileService,
    private readonly cryptoService: CryptoService,
  ) {
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

    this.bot.launch();
    this.logger.log('Telegram bot started');
  }
  async generateTelegramAuthLink(userId: number): Promise<string> {
    const oneTimeCode = await this.oneTimeCodeService.createOneTimeCode(
      userId.toString(),
    );

    return `https://site.com/auth/telegram?code=${oneTimeCode}`;
  }

  async generateTelegramBotLink(): Promise<string> {
    return 'https://t.me/secretSantaAuthBot';
  }

  async validateTelegramAuthCode(
    userId: string,
    oneTimeCode: string,
  ): Promise<boolean> {
    return await this.oneTimeCodeService.validateOneTimeCode(
      userId,
      oneTimeCode,
    );
  }

  async signInWithTelegram(
    userId: string,
  ): Promise<{ account: Account; token: string }> {
    const telegramId = `${ExternalProviders.TELEGRAM}_${userId}`;

    let account: Account | null;
    let profile: ExternalProfile | null =
      await this.profileService.searchProfileByExternalId(
        telegramId,
        ExternalProfileProvider.TELEGRAM,
      );
    if (profile) {
      account = await this.accountService.getAccountByProfile(profile);
    } else {
      profile = await this.profileService.createTelegramProfile({
        externalId: userId,
        provider: ExternalProfileProvider.TELEGRAM,
        username: userId,
      });
      account = await this.accountService.getAccountByProfile(profile);
    }

    if (!account) {
      throw new Error('Account not found');
    }

    const token = await this.cryptoService.generateRandomString(
      RandomStringType.ACCESS_TOKEN,
    );

    return {
      token,
      account,
    };
  }
}
