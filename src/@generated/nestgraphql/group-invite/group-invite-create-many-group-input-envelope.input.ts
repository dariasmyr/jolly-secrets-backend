import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupInviteCreateManyGroupInput } from './group-invite-create-many-group.input';
import { Type } from 'class-transformer';

@InputType()
export class GroupInviteCreateManyGroupInputEnvelope {

    @Field(() => [GroupInviteCreateManyGroupInput], {nullable:false})
    @Type(() => GroupInviteCreateManyGroupInput)
    data!: Array<GroupInviteCreateManyGroupInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
