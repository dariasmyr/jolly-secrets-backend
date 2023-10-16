import { UseGuards } from '@nestjs/common';
import {
  Args,
  Field,
  InputType,
  Mutation,
  Query,
  Resolver,
} from '@nestjs/graphql';

import { Notification } from '@/@generated/nestgraphql/notification/notification.model';
import { AuthGuard } from '@/app/auth/auth-guard/auth.guard';
import { RequestContext } from '@/app/auth/request-context-extractor/interfaces';
import { RequestContextDecorator } from '@/app/request-context.decorator';

import { NotificationService } from './notification.service';

@InputType()
export class CreateNotificationInput {
  @Field()
  accountId: number;

  @Field()
  title: string;

  @Field()
  message: string;
}

@Resolver()
export class NotificationResolver {
  constructor(private readonly notificationService: NotificationService) {}

  @Query(() => [Notification], { name: 'notifications' })
  @UseGuards(AuthGuard)
  async notifications(
    @RequestContextDecorator() context: RequestContext,
    @Args('offset') offset: number,
    @Args('limit') limit: number,
  ): Promise<Array<Notification>> {
    return this.notificationService.getNotifications(
      context.account!.id,
      offset,
      limit,
    );
  }

  @Query(() => Notification, { name: 'notification' })
  @UseGuards(AuthGuard)
  async notification(
    @RequestContextDecorator() context: RequestContext,
    @Args('id') id: number,
  ): Promise<Notification | null> {
    return this.notificationService.getNotificationById(
      context.account!.id,
      id,
    );
  }

  @Mutation(() => Notification, { name: 'setNotificationAsRead' })
  @UseGuards(AuthGuard)
  async setNotificationAsRead(
    @RequestContextDecorator() context: RequestContext,
    @Args('id') id: number,
  ): Promise<Notification | null> {
    return this.notificationService.setNotificationAsRead(
      context.account!.id,
      id,
    );
  }
}
