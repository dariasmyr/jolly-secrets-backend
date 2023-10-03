import { Module } from '@nestjs/common';

import { AccountGateway } from '@/app/account/account.gateway';
import { AccountService } from '@/app/account/account.service';
import { AccountSessionService } from '@/app/account-session/account-session.service';
import { CryptoService } from '@/common/crypto/crypto.service';
import { PrismaService } from '@/common/prisma/prisma.service';

import { GroupResolver } from './group.resolver';
import { GroupService } from './group.service';
import { GroupInviteResolver } from './group-invite/group-invite.resolver';
import { GroupInviteService } from './group-invite/group-invite.service';
import { GroupMemberResolver } from './group-member/group-member.resolver';
import { GroupMemberService } from './group-member/group-member.service';

@Module({
  providers: [
    GroupResolver,
    GroupService,
    GroupMemberService,
    GroupMemberResolver,
    GroupInviteService,
    GroupInviteResolver,
    PrismaService,
    AccountService,
    CryptoService,
    AccountGateway,
    AccountSessionService,
  ],
})
export class GroupModule {}
