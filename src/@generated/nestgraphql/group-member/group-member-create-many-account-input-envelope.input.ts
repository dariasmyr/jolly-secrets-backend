import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupMemberCreateManyAccountInput } from './group-member-create-many-account.input';
import { Type } from 'class-transformer';

@InputType()
export class GroupMemberCreateManyAccountInputEnvelope {

    @Field(() => [GroupMemberCreateManyAccountInput], {nullable:false})
    @Type(() => GroupMemberCreateManyAccountInput)
    data!: Array<GroupMemberCreateManyAccountInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
