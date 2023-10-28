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
    const codeLength: number = 32;
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

  async verifyGroupInviteCode(code: string): Promise<GroupInvite | null> {
    return this.prisma.groupInvite.findFirst({
      where: {
        code,
      },
    });
  }

  async deleteGroupInvite(code: string): Promise<GroupInvite | null> {
    return this.prisma.groupInvite.delete({
      where: {
        code,
      },
    });
  }
}
