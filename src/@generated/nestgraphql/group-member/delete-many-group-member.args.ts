import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GroupMemberWhereInput } from './group-member-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyGroupMemberArgs {

    @Field(() => GroupMemberWhereInput, {nullable:true})
    @Type(() => GroupMemberWhereInput)
    where?: GroupMemberWhereInput;
}
