import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class GroupInviteScalarWhereInput {

    @Field(() => [GroupInviteScalarWhereInput], {nullable:true})
    AND?: Array<GroupInviteScalarWhereInput>;

    @Field(() => [GroupInviteScalarWhereInput], {nullable:true})
    OR?: Array<GroupInviteScalarWhereInput>;

    @Field(() => [GroupInviteScalarWhereInput], {nullable:true})
    NOT?: Array<GroupInviteScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    groupId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    code?: StringFilter;
}
