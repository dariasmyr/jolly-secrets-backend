import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { AuthResponse } from '@/app/account/types';

import { TelegramService } from './telegram.service';

@Resolver('TelegramAuth')
export class TelegramResolver {
  constructor(private readonly telegramService: TelegramService) {}

  @Query(() => String, { name: 'generateBotLinkTelegram' })
  async generateBotLink(): Promise<string> {
    return this.telegramService.generateTelegramBotLink();
  }

  @Mutation(() => Boolean, { name: 'validateTelegramAuthCode' })
  async validateTelegramAuthCode(
    @Args('userId') userId: string,
    @Args('oneTimeCode') oneTimeCode: string,
  ): Promise<boolean> {
    return this.telegramService.validateTelegramAuthCode(userId, oneTimeCode);
  }

  @Mutation(() => AuthResponse, { name: 'logInWithTelegram' })
  async logInWithTelegram(
    @Args('userId') userId: string,
  ): Promise<AuthResponse> {
    try {
      return this.telegramService.logInWithTelegram(userId);
    } catch (error) {
      throw new Error(
        `Failed to log in with Telegram: ${(error as Error).message}`,
      );
    }
  }
}
