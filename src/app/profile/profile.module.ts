import { Module } from '@nestjs/common';

import { PrismaModule } from '@/common/prisma/prisma.module';

import { ProfileService } from './profile.service';

@Module({
  imports: [PrismaModule],
  providers: [ProfileService],
})
export class ProfileModule {}
