// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/no-null */
import { Injectable } from '@nestjs/common';
import { Group } from '@prisma/client';

import { Account } from '@/@generated/nestgraphql/account/account.model';
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
}
