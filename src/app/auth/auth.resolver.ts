import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { AccountSessionService } from '@/app/account-session/account-session.service';
import { AuthGuard } from '@/app/auth/auth-guard/auth.guard';
import { RequestContext } from '@/app/auth/request-context-extractor/interfaces';
import { RequestContextDecorator } from '@/app/request-context.decorator';

@Resolver()
export class AuthResolver {
  constructor(private accountSessionService: AccountSessionService) {}

  @Mutation(() => Boolean)
  @UseGuards(new AuthGuard())
  async logout(
    @Args('sessionIds', {
      type: () => [Number],
    })
    sessionIds: number[],
    @RequestContextDecorator() context: RequestContext,
  ): Promise<boolean> {
    return await this.accountSessionService.deleteSessions(
      // Should be because AuthGuard is used
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      context.account!,
      sessionIds,
    );
  }
}
