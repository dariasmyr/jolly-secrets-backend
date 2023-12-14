import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';

import { AuthResponse } from '@/app/account/types';
import { RequestContext } from '@/app/auth/request-context-extractor/interfaces';
import { Logger } from '@/common/logger/logger';
import { RealIp } from '@/common/real-ip/real-ip.decorator';

import { GoogleService } from './google.service';

@Resolver('GoogleAuth')
export class GoogleResolver {
  private readonly logger = new Logger(GoogleResolver.name);

  constructor(private readonly googleService: GoogleService) {}

  @Query(() => String, { name: 'generateUrlGoogle' })
  async generateUrl(
    @Args('language', {
      nullable: true,
      defaultValue: 'en',
      type: () => String,
    })
    language?: string | undefined,
    @Args('state', {
      nullable: true,
      defaultValue: undefined,
      type: () => String,
    })
    state?: string | undefined,
  ): Promise<string> {
    return this.googleService.generateUrl(language, state);
  }

  @Mutation(() => AuthResponse, {
    name: 'loginWithGoogle',
  })
  async loginWithGoogle(
    @Args('code') code: string,
    @Context() context: RequestContext,
    @RealIp() ip: string,
  ): Promise<AuthResponse> {
    try {
      const accessToken = await this.googleService.getAccessToken(code);
      const userInfo = await this.googleService.getUserInfo(accessToken);
      return await this.googleService.logInWithGoogle(userInfo, context, ip);
    } catch (error) {
      throw new Error(
        `Failed to log in with Google: ${(error as Error).message}`,
      );
    }
  }
}
