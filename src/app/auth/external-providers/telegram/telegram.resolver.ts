import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';

import { AuthResponse } from '@/app/account/types';
import { RequestContext } from '@/app/auth/request-context-extractor/interfaces';
import { RealIp } from '@/common/real-ip/real-ip.decorator';

import { TelegramService } from './telegram.service';

@Resolver('TelegramAuth')
export class TelegramResolver {
  constructor(private readonly telegramService: TelegramService) {}

  @Query(() => String, { name: 'generateTelegramBotLink' })
  async generateTelegramBotLink(): Promise<string> {
    return this.telegramService.generateTelegramBotLink();
  }

  @Mutation(() => AuthResponse, { name: 'loginWithTelegram' })
  async loginWithTelegram(
    @Args('token') token: string,
    @Context() context: RequestContext,
    @RealIp() ip: string,
  ): Promise<AuthResponse> {
    try {
      return this.telegramService.loginWithTelegram(token, context, ip);
    } catch (error) {
      throw new Error(
        `Failed to log in with Telegram: ${(error as Error).message}`,
      );
    }
  }
}
