import { Field, InputType, Resolver } from '@nestjs/graphql';

import { EventService } from './event.service';

@InputType()
export class CreateEventInput {
  @Field()
  groupId: number;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  startsAt: Date;

  @Field()
  endsAt: Date;
}

@Resolver()
export class EventResolver {
  constructor(private readonly eventService: EventService) {}
}
