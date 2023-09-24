import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PriceRange } from '../prisma/price-range.enum';
import { EventApplication } from '../event-application/event-application.model';

@ObjectType()
export class Preference {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => PriceRange, {nullable:false})
    priceRange!: keyof typeof PriceRange;

    @Field(() => String, {nullable:false})
    likes!: string;

    @Field(() => String, {nullable:false})
    dislikes!: string;

    @Field(() => String, {nullable:false})
    comment!: string;

    @Field(() => Int, {nullable:true})
    applicationId!: number | null;

    @Field(() => EventApplication, {nullable:true})
    application?: EventApplication | null;
}
