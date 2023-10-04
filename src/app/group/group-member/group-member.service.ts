import { Injectable } from '@nestjs/common';
import { GroupMember } from '@prisma/client';

import { GroupInviteService } from '@/app/group/group-invite/group-invite.service';
import { CreateGroupMemberInput } from '@/app/group/group-member/group-member.resolver';
import { PrismaService } from '@/common/prisma/prisma.service';

@Injectable()
export class GroupMemberService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly groupInviteService: GroupInviteService,
  ) {}

  async createGroupMember(input: CreateGroupMemberInput): Promise<GroupMember> {
    const groupInvite = await this.groupInviteService.verifyGroupInviteLink(
      input.link!,
    );
    if (!groupInvite) {
      throw new Error('Invalid invite link');
    }

    await this.groupInviteService.deleteGroupInvite(
      groupInvite.code,
      groupInvite.groupId,
    );

    return this.prisma.groupMember.create({
      data: {
        accountId: input.accountId,
        groupId: groupInvite.groupId,
      },
    });
  }

  async getGroupMemberByAccountId(
    accountId: number,
  ): Promise<Array<GroupMember> | null> {
    return this.prisma.groupMember.findMany({
      where: {
        accountId,
      },
    });
  }

  async getGroupMember(groupId: number): Promise<Array<GroupMember> | null> {
    return this.prisma.groupMember.findMany({
      where: {
        groupId,
      },
    });
  }
}
