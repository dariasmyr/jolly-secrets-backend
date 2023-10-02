import { Injectable } from '@nestjs/common';
import { GroupMember } from '@prisma/client';

import { CreateGroupMemberInput } from '@/app/group/group-member/group-member.resolver';
import { PrismaService } from '@/common/prisma/prisma.service';

@Injectable()
export class GroupMemberService {
  constructor(private readonly prisma: PrismaService) {}

  async createGroupMember(input: CreateGroupMemberInput): Promise<GroupMember> {
    return this.prisma.groupMember.create({
      data: {
        ...input,
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
