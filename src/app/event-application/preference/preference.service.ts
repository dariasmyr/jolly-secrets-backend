import { Injectable } from '@nestjs/common';
import { Preference } from '@prisma/client';

import { PrismaService } from '@/common/prisma/prisma.service';

@Injectable()
export class PreferenceService {
  constructor(private readonly prismaService: PrismaService) {}

  async getPreferenceById(id: number): Promise<Preference | null> {
    return this.prismaService.preference.findUnique({
      where: {
        id,
      },
    });
  }
  async getPreferencesByApplicationId(
    applicationId: number,
  ): Promise<Array<Preference> | null> {
    return this.prismaService.preference.findMany({
      where: {
        applicationId,
      },
    });
  }

  async deletePreference(id: number): Promise<Preference> {
    return this.prismaService.preference.delete({
      where: {
        id,
      },
    });
  }
}
