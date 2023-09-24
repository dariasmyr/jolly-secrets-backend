import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class NotificationScalarWhereInput {

    @Field(() => [NotificationScalarWhereInput], {nullable:true})
    AND?: Array<NotificationScalarWhereInput>;

    @Field(() => [NotificationScalarWhereInput], {nullable:true})
    OR?: Array<NotificationScalarWhereInput>;

    @Field(() => [NotificationScalarWhereInput], {nullable:true})
    NOT?: Array<NotificationScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    accountId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    message?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    read?: BoolFilter;
}
