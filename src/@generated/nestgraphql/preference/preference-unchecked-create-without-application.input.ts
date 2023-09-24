import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PriceRange } from '../prisma/price-range.enum';

@InputType()
export class PreferenceUncheckedCreateWithoutApplicationInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => PriceRange, {nullable:false})
    priceRange!: keyof typeof PriceRange;

    @Field(() => String, {nullable:false})
    likes!: string;

    @Field(() => String, {nullable:false})
    dislikes!: string;

    @Field(() => String, {nullable:false})
    comment!: string;
}
