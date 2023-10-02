import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EventStatus } from '../prisma/event-status.enum';

@InputType()
export class EventCreateManyInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    pictureUrl!: string;

    @Field(() => EventStatus, {nullable:false})
    status!: keyof typeof EventStatus;

    @Field(() => Int, {nullable:false})
    groupId!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:false})
    startsAt!: Date | string;

    @Field(() => Date, {nullable:false})
    endsAt!: Date | string;
}
