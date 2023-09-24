import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventApplicationUpdateManyMutationInput } from './event-application-update-many-mutation.input';
import { Type } from 'class-transformer';
import { EventApplicationWhereInput } from './event-application-where.input';

@ArgsType()
export class UpdateManyEventApplicationArgs {

    @Field(() => EventApplicationUpdateManyMutationInput, {nullable:false})
    @Type(() => EventApplicationUpdateManyMutationInput)
    data!: EventApplicationUpdateManyMutationInput;

    @Field(() => EventApplicationWhereInput, {nullable:true})
    @Type(() => EventApplicationWhereInput)
    where?: EventApplicationWhereInput;
}
