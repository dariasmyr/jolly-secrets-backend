import { Injectable } from '@nestjs/common';
import i18next, { TFunction } from 'i18next';

import { Logger } from '@/common/logger/logger';

import enTranslation from '../i18n/en/notifications.json';
import ruTranslation from '../i18n/ru/notifications.json';

@Injectable()
export class I18nService {
  private logger: Logger;
  constructor() {
    i18next.init({
      fallbackLng: 'en',
      resources: {
        en: {
          translation: enTranslation,
        },
        ru: {
          translation: ruTranslation,
        },
      },
    });
  }

  getTranslation(lng: string): TFunction {
    return i18next.getFixedT(lng);
  }
}
