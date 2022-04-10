import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'user' })
export class User {
  @Field(type => ID)
  id: number;

  @Field({ nullable: false })
  name: string;

  @Field({ nullable: false })
  lastName: string;
}
