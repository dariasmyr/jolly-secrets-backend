import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NotificationWhereUniqueInput } from './notification-where-unique.input';
import { Type } from 'class-transformer';
import { NotificationUpdateWithoutAccountInput } from './notification-update-without-account.input';

@InputType()
export class NotificationUpdateWithWhereUniqueWithoutAccountInput {

    @Field(() => NotificationWhereUniqueInput, {nullable:false})
    @Type(() => NotificationWhereUniqueInput)
    where!: Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>;

    @Field(() => NotificationUpdateWithoutAccountInput, {nullable:false})
    @Type(() => NotificationUpdateWithoutAccountInput)
    data!: NotificationUpdateWithoutAccountInput;
}
