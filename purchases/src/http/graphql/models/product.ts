import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Product {
  @Field(() => ID)
  id: number;

  @Field()
  title: string;

  @Field()
  slug: string;
}
