// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/no-null */
import { Injectable } from '@nestjs/common';
import { Group } from '@prisma/client';

import { Account } from '@/@generated/nestgraphql/account/account.model';
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
    account: Account,
    offset: number,
    limit: number,
  ): Promise<Array<Group>> {
    return this.prisma.group.findMany({
      where: {
        type: 'PRIVATE',
        members: {
          some: {
            id: account.id,
          },
        },
      },
      skip: offset,
      take: limit,
    });
  }

  async getGroupById(account: Account, id: number): Promise<Group | null> {
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
          accountId: account.id,
        },
      });
      return member ? group : null;
    } else {
      return null;
    }
  }

  async ifAccountAdminOfGroup(
    account: Account,
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
          accountId: account.id,
        },
      });
      return member?.role === 'ADMIN';
    } else {
      return null;
    }
  }

  async createGroup(
    account: Account,
    input: CreateOrUpdateGroupInput,
  ): Promise<Group> {
    return this.prisma.group.create({
      data: {
        ...input,
        pictureUrl: 'images/rainbow-vortex.png',
        status: GroupStatus.OPEN,
        members: {
          create: {
            accountId: account.id,
          },
        },
      },
    });
  }

  async updateGroup(
    account: Account,
    id: number,
    input: CreateOrUpdateGroupInput,
  ): Promise<Group> {
    const group = await this.getGroupById(account, id);
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

  async deleteGroup(account: Account, id: number): Promise<Group> {
    const group = await this.getGroupById(account, id);
    if (!group) {
      throw new Error('Group not found');
    }

    const isAccountAdminOfGroup = await this.ifAccountAdminOfGroup(account, id);
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
