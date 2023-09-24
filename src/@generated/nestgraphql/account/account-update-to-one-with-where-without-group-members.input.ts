import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountWhereInput } from './account-where.input';
import { Type } from 'class-transformer';
import { AccountUpdateWithoutGroupMembersInput } from './account-update-without-group-members.input';

@InputType()
export class AccountUpdateToOneWithWhereWithoutGroupMembersInput {

    @Field(() => AccountWhereInput, {nullable:true})
    @Type(() => AccountWhereInput)
    where?: AccountWhereInput;

    @Field(() => AccountUpdateWithoutGroupMembersInput, {nullable:false})
    @Type(() => AccountUpdateWithoutGroupMembersInput)
    data!: AccountUpdateWithoutGroupMembersInput;
}
