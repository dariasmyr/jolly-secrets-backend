import { Module } from '@nestjs/common';

import { GoogleResolver } from '@/app/auth/external-providers/google/google.resolver';
import { GoogleService } from '@/app/auth/external-providers/google/google.service';

export enum ExternalProviders {
  GOOGLE = 'google',
  TELEGRAM = 'telegram',
}

@Module({
  providers: [GoogleResolver, GoogleService],
})
export class ExternalProvidersModule {}
