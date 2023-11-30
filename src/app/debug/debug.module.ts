import { Module } from '@nestjs/common';

import { AccountModule } from '@/app/account/account.module';
import { DebugResolver } from '@/app/debug/debug.resolver';

import { GitService } from './git/git.service';

@Module({
  imports: [AccountModule],
  providers: [DebugResolver, GitService],
  exports: [DebugResolver, GitService],
})
export class DebugModule {}
