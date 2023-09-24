import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NotificationWhereUniqueInput } from './notification-where-unique.input';
import { Type } from 'class-transformer';
import { NotificationUpdateWithoutAccountInput } from './notification-update-without-account.input';
import { NotificationCreateWithoutAccountInput } from './notification-create-without-account.input';

@InputType()
export class NotificationUpsertWithWhereUniqueWithoutAccountInput {

    @Field(() => NotificationWhereUniqueInput, {nullable:false})
    @Type(() => NotificationWhereUniqueInput)
    where!: Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>;

    @Field(() => NotificationUpdateWithoutAccountInput, {nullable:false})
    @Type(() => NotificationUpdateWithoutAccountInput)
    update!: NotificationUpdateWithoutAccountInput;

    @Field(() => NotificationCreateWithoutAccountInput, {nullable:false})
    @Type(() => NotificationCreateWithoutAccountInput)
    create!: NotificationCreateWithoutAccountInput;
}
