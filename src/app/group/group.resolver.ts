import { Resolver } from '@nestjs/graphql';

import { GroupService } from './group.service';

@Resolver()
export class GroupResolver {
  constructor(private readonly groupService: GroupService) {}
}
