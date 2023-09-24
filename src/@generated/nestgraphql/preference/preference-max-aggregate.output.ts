import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PriceRange } from '../prisma/price-range.enum';

@ObjectType()
export class PreferenceMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => PriceRange, {nullable:true})
    priceRange?: keyof typeof PriceRange;

    @Field(() => String, {nullable:true})
    likes?: string;

    @Field(() => String, {nullable:true})
    dislikes?: string;

    @Field(() => String, {nullable:true})
    comment?: string;

    @Field(() => Int, {nullable:true})
    applicationId?: number;
}
