import { UseGuards } from '@nestjs/common';
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { I18n, I18nContext, I18nService } from 'nestjs-i18n';

import { Account } from '@/@generated/nestgraphql/account/account.model';
import { AccountSession } from '@/@generated/nestgraphql/account-session/account-session.model';
import { ExternalProfile } from '@/@generated/nestgraphql/external-profile/external-profile.model';
import { ExternalProfileProvider } from '@/@generated/nestgraphql/prisma/external-profile-provider.enum';
import { AccountService } from '@/app/account/account.service';
import { UpdateAccountInput } from '@/app/account/types';
import { AccountSessionService } from '@/app/account-session/account-session.service';
import { AuthGuard } from '@/app/auth/auth-guard/auth.guard';
import { RequestContext } from '@/app/auth/request-context-extractor/interfaces';
import { ProfileService } from '@/app/profile/profile.service';
import { RequestContextDecorator } from '@/app/request-context.decorator';

@Resolver(() => Account)
export class AccountResolver {
  constructor(
    private accountSessionService: AccountSessionService,
    private accountService: AccountService,
    private profileService: ProfileService,
    private i18n: I18nService,
  ) {}

  @Query(() => Account, { name: 'whoami' })
  @UseGuards(AuthGuard)
  whoami(@RequestContextDecorator() context: RequestContext): Account {
    // Should be because AuthGuard is used
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return context.account!;
  }

  @ResolveField(() => [AccountSession])
  @UseGuards(AuthGuard)
  async sessions(
    @Parent() account: Account,
    @RequestContextDecorator() context: RequestContext,
    @I18n() i18n: I18nContext,
  ): Promise<Array<AccountSession>> {
    if (context.account?.id !== account.id) {
      // eslint-disable-next-line sonarjs/no-duplicate-string
      throw new Error(i18n.t('errors.unauthorized'));
    }
    return this.accountSessionService.getSessions(account);
  }

  @ResolveField(() => [AccountSession])
  @UseGuards(AuthGuard)
  async externalProfiles(
    @Parent() account: Account,
    @RequestContextDecorator() context: RequestContext,
    @I18n() i18n: I18nContext,
  ): Promise<ExternalProfile[] | null> {
    if (context.account?.id !== account.id) {
      // eslint-disable-next-line sonarjs/no-duplicate-string
      throw new Error(i18n.t('errors.unauthorized'));
    }
    return this.profileService.getExternalProfileByAccountId(account.id);
  }

  // update account mutation
  @Mutation(() => Account)
  @UseGuards(AuthGuard)
  async updateAccount(
    @RequestContextDecorator() context: RequestContext,
    @Args('input') input: UpdateAccountInput,
  ): Promise<Account> {
    // Should be because AuthGuard is used
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.accountService.updateAccount(context.account!, input);
  }

  // enable notifications mutation
  @Mutation(() => Account)
  @UseGuards(AuthGuard)
  async enableNotifications(
    @RequestContextDecorator() context: RequestContext,
    @Args('email') email: string,
  ): Promise<Account> {
    // Should be because AuthGuard is used
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.accountService.enableNotifications(context.account!, email);
  }

  // disable notifications mutation
  @Mutation(() => Account)
  @UseGuards(AuthGuard)
  async disableNotifications(
    @RequestContextDecorator() context: RequestContext,
  ): Promise<Account> {
    // Should be because AuthGuard is used
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.accountService.disableNotifications(context.account!);
  }

  // delete account mutation
  @Mutation(() => Account)
  @UseGuards(AuthGuard)
  async deleteAccount(
    @RequestContextDecorator() context: RequestContext,
  ): Promise<Account> {
    // Should be because AuthGuard is used
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.accountService.deleteAccount(context.account!);
  }

  // TODO Fix mergeProfileToAccount function (+logic)
  @Mutation(() => Account)
  @UseGuards(AuthGuard)
  async mergeProfileToAccount(
    @Args('accountIdToLeave') accountIdToLeave: number,
    @Args('accountIdToRemove') accountIdToRemove: number,
    @Args('externalId') externalId: string,
    @Args('provider') provider: ExternalProfileProvider,
    @RequestContextDecorator() context: RequestContext,
  ): Promise<Account> {
    if (context.account?.id !== accountIdToRemove) {
      throw new Error(this.i18n.t('errors.unauthorized'));
    }

    const profile = await this.profileService.getProfileByExternalId(
      externalId,
      provider,
    );

    if (!profile) {
      throw new Error(this.i18n.t('errors.profile_not_found'));
    }

    return await this.profileService.mergeProfileToAccount(
      accountIdToRemove,
      accountIdToLeave,
      profile,
    );
  }
}
