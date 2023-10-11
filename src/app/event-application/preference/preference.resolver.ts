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

import { EventApplication } from '@/@generated/nestgraphql/event-application/event-application.model';
import { Preference } from '@/@generated/nestgraphql/preference/preference.model';
import { PriceRange } from '@/@generated/nestgraphql/prisma/price-range.enum';
import { AuthGuard } from '@/app/auth/auth-guard/auth.guard';
import { EventApplicationService } from '@/app/event-application/event-application.service';
import { PreferenceService } from '@/app/event-application/preference/preference.service';

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

@Resolver()
export class PreferenceResolver {
  constructor(
    private readonly preferenceService: PreferenceService,
    private readonly eventApplicationService: EventApplicationService,
  ) {}

  @Mutation(() => Preference, { name: 'createPreference' })
  @UseGuards(AuthGuard)
  async createPreference(
    @Args('input') input: CreatePreferenceInput,
  ): Promise<Preference> {
    return this.preferenceService.createPreference(input);
  }

  @Mutation(() => Preference, { name: 'deletePreference' })
  @UseGuards(AuthGuard)
  async deletePreference(@Args('id') id: number): Promise<Preference> {
    return this.preferenceService.deletePreference(id);
  }

  @ResolveField(() => EventApplication, { name: 'eventApplication' })
  @UseGuards(AuthGuard)
  async eventApplication(
    @Parent() preference: Preference,
  ): Promise<EventApplication | null> {
    return this.eventApplicationService.getEventApplicationByPreferenceId(
      preference.id,
    );
  }
}
