import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GroupWhereUniqueInput } from './group-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueGroupArgs {

    @Field(() => GroupWhereUniqueInput, {nullable:false})
    @Type(() => GroupWhereUniqueInput)
    where!: Prisma.AtLeast<GroupWhereUniqueInput, 'id' | 'name'>;
}
