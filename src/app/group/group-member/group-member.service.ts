import { Injectable } from '@nestjs/common';
import { GroupMember } from '@prisma/client';

import { GroupInviteService } from '@/app/group/group-invite/group-invite.service';
import { PrismaService } from '@/common/prisma/prisma.service';

@Injectable()
export class GroupMemberService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly groupInviteService: GroupInviteService,
  ) {}

  async createGroupMember(
    accountId: number,
    code: string,
  ): Promise<GroupMember> {
    const groupInvite =
      await this.groupInviteService.verifyGroupInviteCode(code);
    if (!groupInvite) {
      throw new Error('Invalid invite link');
    }

    await this.groupInviteService.deleteGroupInvite(groupInvite.code);

    return this.prisma.groupMember.create({
      data: {
        accountId: accountId,
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
