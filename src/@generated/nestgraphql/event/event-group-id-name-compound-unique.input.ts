import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class EventGroupIdNameCompoundUniqueInput {

    @Field(() => Int, {nullable:false})
    groupId!: number;

    @Field(() => String, {nullable:false})
    name!: string;
}
