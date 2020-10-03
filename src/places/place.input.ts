import {Field, InputType} from "@nestjs/graphql";

@InputType()
export class PlaceInput {
  @Field()
  name: string;

  @Field()
  address: string;
}
