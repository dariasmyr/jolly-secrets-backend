import { UseGuards } from '@nestjs/common';
import {
  Args,
  Field,
  InputType,
  Mutation,
  Parent,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { I18nService } from 'nestjs-i18n';

import { EventApplication } from '@/@generated/nestgraphql/event-application/event-application.model';
import { Preference } from '@/@generated/nestgraphql/preference/preference.model';
import { PriceRange } from '@/@generated/nestgraphql/prisma/price-range.enum';
import { AuthGuard } from '@/app/auth/auth-guard/auth.guard';
import { RequestContext } from '@/app/auth/request-context-extractor/interfaces';
import { EventApplicationService } from '@/app/event-application/event-application.service';
import { PreferenceService } from '@/app/event-application/preference/preference.service';
import { RequestContextDecorator } from '@/app/request-context.decorator';

@InputType()
export class CreatePreferenceInput {
  @Field()
  applicationId: number;

  @Field()
  priceRange: PriceRange;

  @Field()
  likes: string;

  @Field()
  dislikes: string;

  @Field()
  comment: string;
}

@Resolver(() => Preference)
export class PreferenceResolver {
  constructor(
    private readonly preferenceService: PreferenceService,
    private readonly eventApplicationService: EventApplicationService,
    private i18n: I18nService,
  ) {}

  private async authorize(
    context: RequestContext,
    preference: Preference,
  ): Promise<void> {
    const applications =
      await this.eventApplicationService.getEventApplicationByAccountId(
        context.account!.id,
      );

    if (!applications) {
      // eslint-disable-next-line sonarjs/no-duplicate-string
      throw new Error(this.i18n.t('errors.unauthorized'));
    }

    const eventApplication =
      await this.eventApplicationService.getEventApplicationByPreferenceId(
        preference.id,
      );

    if (!eventApplication) {
      // eslint-disable-next-line sonarjs/no-duplicate-string
      throw new Error(this.i18n.t('errors.unauthorized'));
    }

    const isApplicationOwner = applications.some(
      (application) => application.id === eventApplication.accountId,
    );

    if (!isApplicationOwner) {
      throw new Error(this.i18n.t('errors.unauthorized'));
    }
  }

  @Mutation(() => Preference, { name: 'deletePreference' })
  @UseGuards(AuthGuard)
  async deletePreference(
    @Args('id') id: number,
    @RequestContextDecorator() context: RequestContext,
  ): Promise<Preference> {
    const preference = await this.preferenceService.getPreferenceById(id);
    if (!preference) {
      throw new Error(this.i18n.t('errors.notFound'));
    }
    await this.authorize(context, preference);
    return this.preferenceService.deletePreference(id);
  }

  @ResolveField(() => EventApplication, { name: 'eventApplication' })
  @UseGuards(AuthGuard)
  async eventApplication(
    @Parent() preference: Preference,
    @RequestContextDecorator() context: RequestContext,
  ): Promise<EventApplication | null> {
    await this.authorize(context, preference);
    return this.eventApplicationService.getEventApplicationByPreferenceId(
      preference.id,
    );
  }
}
