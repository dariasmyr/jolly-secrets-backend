// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/no-null */
import { Injectable } from '@nestjs/common';
import { Group } from '@prisma/client';

import { GroupStatus } from '@/@generated/nestgraphql/prisma/group-status.enum';
import { CreateOrUpdateGroupInput } from '@/app/group/group.resolver';
import { PrismaService } from '@/common/prisma/prisma.service';

@Injectable()
export class GroupService {
  constructor(private readonly prisma: PrismaService) {}

  async getPublicGroups(offset: number, limit: number): Promise<Array<Group>> {
    return this.prisma.group.findMany({
      where: {
        type: 'PUBLIC',
      },
      skip: offset,
      take: limit,
    });
  }

  async getPrivateGroups(
    accountId: number,
    offset: number,
    limit: number,
  ): Promise<Array<Group>> {
    return this.prisma.group.findMany({
      where: {
        type: 'PRIVATE',
        members: {
          some: {
            id: accountId,
          },
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
    if (group?.type === 'PUBLIC') {
      return group;
    } else if (group?.type === 'PRIVATE') {
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

  async getGroupId(id: number): Promise<Group | null> {
    return this.prisma.group.findUnique({
      where: {
        id,
      },
    });
  }

  async ifAccountAdminOfGroup(
    accountId: number,
    id: number,
  ): Promise<boolean | null> {
    const group = await this.prisma.group.findUnique({
      where: {
        id,
      },
    });
    if (group?.type === 'PUBLIC') {
      return false;
    } else if (group?.type === 'PRIVATE') {
      const member = await this.prisma.groupMember.findFirst({
        where: {
          groupId: id,
          accountId: accountId,
        },
      });
      return member?.role === 'ADMIN';
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
    if (group?.type === 'PUBLIC') {
      return true;
    } else if (group?.type === 'PRIVATE') {
      const member = await this.prisma.groupMember.findFirst({
        where: {
          groupId: id,
          accountId: accountId,
        },
      });
      return member?.role === 'MEMBER';
    } else {
      return null;
    }
  }

  async createGroup(
    accountId: number,
    input: CreateOrUpdateGroupInput,
  ): Promise<Group> {
    return this.prisma.group.create({
      data: {
        ...input,
        pictureUrl: 'images/rainbow-vortex.png',
        status: GroupStatus.OPEN,
        members: {
          create: {
            accountId: accountId,
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

    const isAccountAdminOfGroup = await this.ifAccountAdminOfGroup(
      accountId,
      id,
    );
    if (isAccountAdminOfGroup) {
      return this.prisma.group.update({
        where: {
          id,
        },
        data: {
          status: GroupStatus.CLOSED,
        },
      });
    } else {
      throw new Error('Account is not admin of group');
    }
  }
}
