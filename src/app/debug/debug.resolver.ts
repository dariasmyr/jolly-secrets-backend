import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';
import { I18n, I18nContext } from 'nestjs-i18n';

import { I18nTranslations } from '@/@generated/i18n-types';
import { AccountGateway } from '@/app/account/account.gateway';
import { GitService } from '@/app/debug/git/git.service';
import { Logger } from '@/common/logger/logger';

import appInfo from '../../../app-info.json';

@Resolver(() => Query)
export class DebugResolver {
  private readonly logger: Logger = new Logger(DebugResolver.name);

  constructor(
    private readonly accountGateway: AccountGateway,
    private readonly gitService: GitService,
  ) {}

  @Query(() => String, { name: 'testTranslation' })
  testTranslation(
    @Args('username', { type: () => String }) username: string,
    @I18n() i18n: I18nContext<I18nTranslations>,
  ): string {
    return i18n.t('translations.hello', {
      args: {
        username,
      },
    });
  }

  @Query(() => String, { name: 'echo' })
  async echo(
    @Args('text', { type: () => String }) text: string,
  ): Promise<string> {
    await this.accountGateway.sendToAccount(2, 'new_message', {
      echoMessage: text,
    });
    this.logger.log({ resolver: 'echo', text });
    return text;
  }

  @Mutation(() => String, { name: 'echo' })
  echoMutation(@Args('text', { type: () => String }) text: string): string {
    return text;
  }

  @Query(() => GraphQLJSON, { name: 'debug' })
  debug(): unknown {
    const SECONDS_IN_DAY = 86_400;
    const SECONDS_IN_HOUR = 3600;
    const SECONDS_IN_MINUTE = 60;
    const uptime = process.uptime();
    const uptimeDays = Math.floor(uptime / SECONDS_IN_DAY);
    const uptimeHours = Math.floor((uptime % SECONDS_IN_DAY) / SECONDS_IN_HOUR);
    const uptimeMinutes = Math.floor(
      ((uptime % SECONDS_IN_DAY) % SECONDS_IN_HOUR) / SECONDS_IN_MINUTE,
    );
    const uptimeSeconds = Math.floor(
      ((uptime % SECONDS_IN_DAY) % SECONDS_IN_HOUR) % SECONDS_IN_MINUTE,
    );
    const uptimePretty = `${uptimeDays}d ${uptimeHours}h ${uptimeMinutes}m ${uptimeSeconds}s`;

    return {
      serverTime: new Date().toISOString(),
      uptime: uptimePretty,
      appInfo,
      lastCommit: this.gitService.getLastCommitInfo(),
    };
  }
}
