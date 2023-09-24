import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationCreateWithoutAccountInput } from './notification-create-without-account.input';
import { Type } from 'class-transformer';
import { NotificationCreateOrConnectWithoutAccountInput } from './notification-create-or-connect-without-account.input';
import { NotificationUpsertWithWhereUniqueWithoutAccountInput } from './notification-upsert-with-where-unique-without-account.input';
import { NotificationCreateManyAccountInputEnvelope } from './notification-create-many-account-input-envelope.input';
import { Prisma } from '@prisma/client';
import { NotificationWhereUniqueInput } from './notification-where-unique.input';
import { NotificationUpdateWithWhereUniqueWithoutAccountInput } from './notification-update-with-where-unique-without-account.input';
import { NotificationUpdateManyWithWhereWithoutAccountInput } from './notification-update-many-with-where-without-account.input';
import { NotificationScalarWhereInput } from './notification-scalar-where.input';

@InputType()
export class NotificationUncheckedUpdateManyWithoutAccountNestedInput {

    @Field(() => [NotificationCreateWithoutAccountInput], {nullable:true})
    @Type(() => NotificationCreateWithoutAccountInput)
    create?: Array<NotificationCreateWithoutAccountInput>;

    @Field(() => [NotificationCreateOrConnectWithoutAccountInput], {nullable:true})
    @Type(() => NotificationCreateOrConnectWithoutAccountInput)
    connectOrCreate?: Array<NotificationCreateOrConnectWithoutAccountInput>;

    @Field(() => [NotificationUpsertWithWhereUniqueWithoutAccountInput], {nullable:true})
    @Type(() => NotificationUpsertWithWhereUniqueWithoutAccountInput)
    upsert?: Array<NotificationUpsertWithWhereUniqueWithoutAccountInput>;

    @Field(() => NotificationCreateManyAccountInputEnvelope, {nullable:true})
    @Type(() => NotificationCreateManyAccountInputEnvelope)
    createMany?: NotificationCreateManyAccountInputEnvelope;

    @Field(() => [NotificationWhereUniqueInput], {nullable:true})
    @Type(() => NotificationWhereUniqueInput)
    set?: Array<Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>>;

    @Field(() => [NotificationWhereUniqueInput], {nullable:true})
    @Type(() => NotificationWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>>;

    @Field(() => [NotificationWhereUniqueInput], {nullable:true})
    @Type(() => NotificationWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>>;

    @Field(() => [NotificationWhereUniqueInput], {nullable:true})
    @Type(() => NotificationWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>>;

    @Field(() => [NotificationUpdateWithWhereUniqueWithoutAccountInput], {nullable:true})
    @Type(() => NotificationUpdateWithWhereUniqueWithoutAccountInput)
    update?: Array<NotificationUpdateWithWhereUniqueWithoutAccountInput>;

    @Field(() => [NotificationUpdateManyWithWhereWithoutAccountInput], {nullable:true})
    @Type(() => NotificationUpdateManyWithWhereWithoutAccountInput)
    updateMany?: Array<NotificationUpdateManyWithWhereWithoutAccountInput>;

    @Field(() => [NotificationScalarWhereInput], {nullable:true})
    @Type(() => NotificationScalarWhereInput)
    deleteMany?: Array<NotificationScalarWhereInput>;
}
