import process from 'node:process';

import { Injectable } from '@nestjs/common';
import { GroupInvite } from '@prisma/client';

import {
  CryptoService,
  RandomStringType,
} from '@/common/crypto/crypto.service';
import { PrismaService } from '@/common/prisma/prisma.service';

@Injectable()
export class GroupInviteService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly cryptoService: CryptoService,
  ) {}

  async getGroupInvitesByGroupId(groupId: number): Promise<Array<GroupInvite>> {
    return this.prisma.groupInvite.findMany({
      where: {
        groupId,
      },
    });
  }

  async createGroupInviteCode(groupId: number): Promise<GroupInvite> {
    const codeLength: number = 16;
    const code = await this.cryptoService.generateRandomString(
      RandomStringType.CODE,
      codeLength,
    );
    if (!code) {
      throw new Error('Failed to generate random string');
    }
    return this.prisma.groupInvite.create({
      data: {
        code,
        groupId,
      },
    });
  }

  async createGroupInviteLink(groupInvite: GroupInvite): Promise<string> {
    const code = groupInvite.code;
    const group = groupInvite.groupId;
    const domain = process.env.DOMAIN;
    if (!code) {
      throw new Error('Failed to get code');
    }
    return `${domain}/invite?code=${code}&group=${group}`;
  }

  async verifyGroupInviteLink(link: string): Promise<GroupInvite | null> {
    const code = link.split('?code=')[1];
    const groupId = Number(link.split('&group=')[1]);
    return this.prisma.groupInvite.findFirst({
      where: {
        code,
        groupId,
      },
    });
  }

  async deleteGroupInvite(
    code: string,
    groupId: number,
  ): Promise<GroupInvite | null> {
    return this.prisma.groupInvite.delete({
      where: {
        code,
        groupId,
      },
    });
  }
}
