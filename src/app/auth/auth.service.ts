import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { I18nService } from 'nestjs-i18n';

import { I18nTranslations } from '@/@generated/i18n-types';
import { CryptoService } from '@/common/crypto/crypto.service';
import { PrismaService } from '@/common/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private cryptoService: CryptoService,
    private readonly configService: ConfigService,
    private readonly i18n: I18nService<I18nTranslations>,
  ) {}
}
