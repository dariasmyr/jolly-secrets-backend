import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GroupMemberCreateManyInput } from './group-member-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyGroupMemberArgs {

    @Field(() => [GroupMemberCreateManyInput], {nullable:false})
    @Type(() => GroupMemberCreateManyInput)
    data!: Array<GroupMemberCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
