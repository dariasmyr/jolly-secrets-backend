import { forwardRef, Module } from '@nestjs/common';

import { AccountModule } from '@/app/account/account.module';
import { EventModule } from '@/app/event/event.module';
import { PrismaService } from '@/common/prisma/prisma.service';

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
  imports: [forwardRef(() => EventModule), forwardRef(() => AccountModule)],
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