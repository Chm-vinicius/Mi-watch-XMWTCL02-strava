import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'activities' })
export class Activities {
  @Field({ nullable: false})
  name: string;

  @Field({ nullable: false })
  type: string;

  @Field({ nullable: false })
  start_date_local: Date;

  @Field({ nullable: false})
  elapsed_time: number
}