import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupStatus } from './group-status.enum';

@InputType()
export class NestedEnumGroupStatusFilter {

    @Field(() => GroupStatus, {nullable:true})
    equals?: keyof typeof GroupStatus;

    @Field(() => [GroupStatus], {nullable:true})
    in?: Array<keyof typeof GroupStatus>;

    @Field(() => [GroupStatus], {nullable:true})
    notIn?: Array<keyof typeof GroupStatus>;

    @Field(() => NestedEnumGroupStatusFilter, {nullable:true})
    not?: NestedEnumGroupStatusFilter;
}
