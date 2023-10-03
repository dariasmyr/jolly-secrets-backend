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

  async createGroupInvite(groupId: number): Promise<GroupInvite> {
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
}
