import { forwardRef, Module } from '@nestjs/common';

import { AccountModule } from '@/app/account/account.module';
import { AccountSessionModule } from '@/app/account-session/account-session.module';
import { CryptoService } from '@/common/crypto/crypto.service';
import { PrismaService } from '@/common/prisma/prisma.service';

import { GroupResolver } from './group.resolver';
import { GroupService } from './group.service';
import { GroupInviteResolver } from './group-invite/group-invite.resolver';
import { GroupInviteService } from './group-invite/group-invite.service';
import { GroupMemberResolver } from './group-member/group-member.resolver';
import { GroupMemberService } from './group-member/group-member.service';

@Module({
  imports: [
    forwardRef(() => AccountModule),
    forwardRef(() => AccountSessionModule),
  ],
  providers: [
    GroupResolver,
    GroupService,
    GroupMemberService,
    GroupMemberResolver,
    GroupInviteService,
    GroupInviteResolver,
    PrismaService,
    CryptoService,
  ],
  exports: [
    GroupResolver,
    GroupService,
    GroupMemberService,
    GroupMemberResolver,
    GroupInviteService,
    GroupInviteResolver,
  ],
})
export class GroupModule {}
