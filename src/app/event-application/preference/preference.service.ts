import { Injectable } from '@nestjs/common';
import { Preference } from '@prisma/client';

import { CreatePreferenceInput } from '@/app/event-application/preference/preference.resolver';
import { PrismaService } from '@/common/prisma/prisma.service';

@Injectable()
export class PreferenceService {
  constructor(private readonly prismaService: PrismaService) {}

  async getPreferencesByApplicationId(
    applicationId: number,
  ): Promise<Array<Preference> | null> {
    return this.prismaService.preference.findMany({
      where: {
        applicationId,
      },
    });
  }

  async createPreference(input: CreatePreferenceInput): Promise<Preference> {
    return this.prismaService.preference.create({
      data: {
        ...input,
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
