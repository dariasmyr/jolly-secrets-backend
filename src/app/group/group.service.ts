// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/no-null */
import { Injectable } from '@nestjs/common';
import { Group } from '@prisma/client';

import { GroupMemberRole } from '@/@generated/nestgraphql/prisma/group-member-role.enum';
import { GroupStatus } from '@/@generated/nestgraphql/prisma/group-status.enum';
import { GroupType } from '@/@generated/nestgraphql/prisma/group-type.enum';
import { CreateOrUpdateGroupInput } from '@/app/group/group.resolver';
import { PrismaService } from '@/common/prisma/prisma.service';

@Injectable()
export class GroupService {
  constructor(private readonly prisma: PrismaService) {}

  async getPublicGroups(offset: number, limit: number): Promise<Array<Group>> {
    return this.prisma.group.findMany({
      where: {
        type: GroupType.PUBLIC,
        status: {
          not: GroupStatus.CLOSED,
        },
      },
      skip: offset,
      take: limit,
    });
  }

  async isGroupNameAvailable(name: string): Promise<boolean> {
    const group = await this.prisma.group.findFirst({
      where: {
        name,
      },
    });
    return !group;
  }

  async getPrivateGroups(
    accountId: number,
    offset: number,
    limit: number,
  ): Promise<Array<Group>> {
    const groupMember = await this.prisma.groupMember.findMany({
      where: {
        accountId,
      },
    });

    return this.prisma.group.findMany({
      where: {
        id: {
          in: groupMember.map((member) => member.groupId),
        },
        type: GroupType.PRIVATE,
        status: {
          not: GroupStatus.CLOSED,
        },
      },
      skip: offset,
      take: limit,
    });
  }

  async getGroupByAccountId(
    accountId: number,
    id: number,
  ): Promise<Group | null> {
    const group = await this.prisma.group.findUnique({
      where: {
        id,
      },
    });
    if (group?.type === GroupType.PUBLIC) {
      return group;
    } else if (group?.type === GroupType.PRIVATE) {
      const member = await this.prisma.groupMember.findFirst({
        where: {
          groupId: id,
          accountId: accountId,
        },
      });
      return member ? group : null;
    } else {
      return null;
    }
  }

  async getGroupByEventId(eventId: number): Promise<Group | null> {
    return this.prisma.group.findFirst({
      where: {
        events: {
          some: {
            id: eventId,
          },
        },
      },
    });
  }

  async isMemberGroupAdmin(
    accountId: number,
    id: number,
  ): Promise<boolean | null> {
    const group = await this.prisma.group.findUnique({
      where: {
        id,
      },
    });
    if (group?.type === GroupType.PUBLIC || group?.type === GroupType.PRIVATE) {
      const member = await this.prisma.groupMember.findFirst({
        where: {
          groupId: id,
          accountId: accountId,
        },
      });
      return member?.role === GroupMemberRole.ADMIN;
    } else {
      return null;
    }
  }

  async ifAccountMemberOfGroup(
    accountId: number,
    id: number,
  ): Promise<boolean | null> {
    const group = await this.prisma.group.findUnique({
      where: {
        id,
      },
    });
    if (group?.type === GroupType.PRIVATE) {
      const member = await this.prisma.groupMember.findFirst({
        where: {
          groupId: id,
          accountId: accountId,
        },
      });
      return (
        member?.role === GroupMemberRole.MEMBER ||
        member?.role === GroupMemberRole.ADMIN
      );
    } else if (group?.type === GroupType.PUBLIC) {
      return true;
    }
    return null;
  }

  async createGroup(
    accountId: number,
    input: CreateOrUpdateGroupInput,
  ): Promise<Group> {
    return this.prisma.group.create({
      data: {
        ...input,
        pictureUrl:
          'https://catastic.b-cdn.net/wp-content/uploads/2023/04/bengal-cat-origin.jpg',
        status: GroupStatus.OPEN,
        members: {
          create: {
            accountId: accountId,
            role: GroupMemberRole.ADMIN,
          },
        },
      },
    });
  }

  async updateGroup(
    accountId: number,
    id: number,
    input: CreateOrUpdateGroupInput,
  ): Promise<Group> {
    const group = await this.getGroupByAccountId(accountId, id);
    if (!group) {
      throw new Error('Group not found');
    }
    return this.prisma.group.update({
      where: {
        id,
      },
      data: input,
    });
  }

  async deleteGroup(accountId: number, id: number): Promise<Group> {
    const group = await this.getGroupByAccountId(accountId, id);
    if (!group) {
      throw new Error('Group not found');
    }
    return this.prisma.group.update({
      where: {
        id,
      },
      data: {
        status: GroupStatus.CLOSED,
      },
    });
  }
}
