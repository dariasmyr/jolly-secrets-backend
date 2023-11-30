import { forwardRef, Module } from '@nestjs/common';

import { AccountModule } from '@/app/account/account.module';
import { EventModule } from '@/app/event/event.module';
import { GroupModule } from '@/app/group/group.module';
import { NotificationModule } from '@/app/notification/notification.module';
import { NotificationService } from '@/app/notification/notification.service';
import { PrismaService } from '@/common/prisma/prisma.service';
import { I18nService } from '@/i18n/i18n.service';

import { ChatResolver } from './chat/chat.resolver';
import { ChatService } from './chat/chat.service';
import { ChatMemberResolver } from './chat-member/chat-member.resolver';
import { ChatMemberService } from './chat-member/chat-member.service';
import { EventApplicationResolver } from './event-application.resolver';
import { EventApplicationService } from './event-application.service';
import { EventApplicationPairResolver } from './event-application-pair/event-application-pair.resolver';
import { EventApplicationPairService } from './event-application-pair/event-application-pair.service';
import { MessageResolver } from './message/message.resolver';
import { MessageService } from './message/message.service';
import { PreferenceResolver } from './preference/preference.resolver';
import { PreferenceService } from './preference/preference.service';

@Module({
  imports: [
    forwardRef(() => EventModule),
    forwardRef(() => AccountModule),
    forwardRef(() => GroupModule),
    forwardRef(() => NotificationModule),
  ],
  providers: [
    PrismaService,
    EventApplicationResolver,
    EventApplicationService,
    EventApplicationPairService,
    EventApplicationPairResolver,
    PreferenceResolver,
    PreferenceService,
    ChatService,
    ChatResolver,
    ChatMemberResolver,
    ChatMemberService,
    MessageService,
    MessageResolver,
    NotificationService,
    I18nService,
  ],
  exports: [
    EventApplicationService,
    EventApplicationPairService,
    PreferenceService,
    ChatService,
    ChatMemberService,
    MessageService,
  ],
})
export class EventApplicationModule {}
