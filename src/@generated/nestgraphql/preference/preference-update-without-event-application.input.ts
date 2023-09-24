import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PriceRange } from '../prisma/price-range.enum';

@InputType()
export class PreferenceUpdateWithoutEventApplicationInput {

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
}
