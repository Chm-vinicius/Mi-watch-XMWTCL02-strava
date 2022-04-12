import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, Length, MaxLength } from 'class-validator';

@InputType()
export class NewActivityInput {
  @Field()
  @MaxLength(30)
  name: string;

  @Field({ nullable: false })
  @Length(30, 255)
  type: string;

  @Field({ nullable: false })
  startDate: string;

  @Field({ nullable: false })
  duration: number;
}