import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { AuthResponse } from '@/app/account/types';
import { Logger } from '@/common/logger/logger';

import { GoogleService } from './google.service';

@Resolver('GoogleAuth')
export class GoogleResolver {
  private readonly logger = new Logger(GoogleResolver.name);

  constructor(private readonly googleService: GoogleService) {}

  @Query(() => String, { name: 'generateUrlGoogle' })
  async generateUrl(
    @Args('state', {
      nullable: true,
      defaultValue: undefined,
      type: () => String,
    })
    state?: string | undefined,
  ): Promise<string> {
    return this.googleService.generateUrl(state);
  }

  @Mutation(() => AuthResponse, {
    name: 'loginWithGoogle',
  })
  async loginWithGoogle(@Args('code') code: string): Promise<AuthResponse> {
    try {
      const accessToken = await this.googleService.getAccessToken(code);
      const userInfo = await this.googleService.getUserInfo(accessToken);
      return await this.googleService.signInWithGoogle(userInfo);
    } catch (error) {
      throw new Error(
        `Failed to sign in with Google: ${(error as Error).message}`,
      );
    }
  }
}
