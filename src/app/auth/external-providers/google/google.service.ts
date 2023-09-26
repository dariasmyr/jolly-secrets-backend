// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable camelcase */
import * as console from 'node:console';
import process from 'node:process';

import { Injectable } from '@nestjs/common';
import { ExternalProfile, ExternalProfileProvider } from '@prisma/client';
import { OAuth2Client, TokenPayload } from 'google-auth-library';

import { Account } from '@/@generated/nestgraphql/account/account.model';
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
export class GoogleService {
  private readonly logger = new Logger(GoogleService.name);
  private oAuth2Client: OAuth2Client;
  private keys: {
    web: {
      client_id: string;
      project_id: string;
      auth_uri: string;
      token_uri: string;
      auth_provider_x509_cert_url: string;
      client_secret: string;
      redirect_uris: string[];
      javascript_origins: string[];
    };
  };

  constructor(
    private readonly accountService: AccountService,
    private readonly accountSessionService: AccountSessionService,
    private readonly profileService: ProfileService,
    private readonly cryptoService: CryptoService,
  ) {
    this.keys = {
      web: {
        client_id: process.env.GOOGLE_CLIENT_ID as string,
        project_id: process.env.GOOGLE_PROJECT_ID as string,
        auth_uri: 'https://accounts.google.com/o/oauth2/auth',
        token_uri: 'https://oauth2.googleapis.com/token',
        auth_provider_x509_cert_url:
          'https://www.googleapis.com/oauth2/v1/certs',
        client_secret: process.env.GOOGLE_CLIENT_SECRET as string,
        redirect_uris: [process.env.GOOGLE_REDIRECT_URI as string],
        javascript_origins: [process.env.GOOGLE_JAVASCRIPT_ORIGINS as string],
      },
    };

    this.oAuth2Client = new OAuth2Client(
      this.keys.web.client_id,
      this.keys.web.client_secret,
      this.keys.web.redirect_uris[0],
    );
  }

  async generateUrl(state?: string): Promise<string> {
    return this.oAuth2Client.generateAuthUrl({
      access_type: 'offline',
      state,
      scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email',
      ],
    });
  }

  async getAccessToken(code: string): Promise<string> {
    const result = await this.oAuth2Client.getToken(code);

    this.oAuth2Client.setCredentials(result.tokens);

    const url =
      'https://people.googleapis.com/v1/people/me?personFields=names,emailAddresses';
    await this.oAuth2Client.request({ url });
    const accessTokenResult = await this.oAuth2Client.getAccessToken();
    if (!accessTokenResult.token) {
      throw new Error('No access token');
    }
    return accessTokenResult.token;
  }

  async getUserInfo(accessToken: string): Promise<TokenPayload> {
    await this.oAuth2Client.getTokenInfo(accessToken);
    console.log('this.oAuth2Client.credentials', this.oAuth2Client.credentials);
    const idToken = this.oAuth2Client.credentials.id_token;
    if (!idToken) {
      throw new Error('No JWT');
    }
    const token = await this.oAuth2Client.verifyIdToken({
      idToken: idToken,
      audience: this.keys.web.client_id,
    });

    const payload = token.getPayload();
    if (!payload) {
      throw new Error('No token payload');
    }
    return payload;
  }

  async logInWithGoogle(
    userInfo: TokenPayload,
    context: RequestContext,
    ip: string,
  ): Promise<AuthResponse> {
    const username = userInfo.name!;
    const externalId = userInfo.sub;
    let account: Account | null;
    let profile: ExternalProfile | null =
      await this.profileService.searchProfileByExternalId(
        externalId,
        ExternalProfileProvider.GOOGLE,
      );
    console.log('profile', { profile });
    if (profile) {
      account = await this.accountService.getAccountByProfile(profile);
    } else {
      console.log('Create profile');
      profile = await this.profileService.createProfile({
        externalId,
        provider: ExternalProfileProvider.GOOGLE,
        username,
      });
      console.log('Create account');
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
