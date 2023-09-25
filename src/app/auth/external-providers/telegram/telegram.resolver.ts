import { Query, Resolver } from '@nestjs/graphql';

import { TelegramService } from '@/app/auth/external-providers/telegram/telegram.service';
import { Logger } from '@/common/logger/logger';

@Resolver()
export class TelegramResolver {
  private readonly logger = new Logger(TelegramResolver.name);

  constructor(private readonly telegramService: TelegramService) {}

  @Query(() => String, { name: 'generateUrlTelegram' })
  async generateUrl(): Promise<string> {
    return this.telegramService.generateTelegramBotLink();
  }
}
