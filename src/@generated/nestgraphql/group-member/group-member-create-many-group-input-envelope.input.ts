import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupMemberCreateManyGroupInput } from './group-member-create-many-group.input';
import { Type } from 'class-transformer';

@InputType()
export class GroupMemberCreateManyGroupInputEnvelope {

    @Field(() => [GroupMemberCreateManyGroupInput], {nullable:false})
    @Type(() => GroupMemberCreateManyGroupInput)
    data!: Array<GroupMemberCreateManyGroupInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
