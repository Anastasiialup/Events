import { Field, InputType } from '@nestjs/graphql';
import { IsString, IsDate } from 'class-validator';

@InputType('EventInput')
export class EventInput {
  constructor(props?: Partial<EventInput>) {
    Object.assign(this, props || {});
  }

  @IsString()
  @Field(() => String)
  title: string;

  @IsString()
  @Field(() => String)
  description: string;

  @IsDate()
  @Field(() => Date)
  date: Date;

  @IsString()
  @Field(() => String)
  location: string;

  @IsString()
  @Field(() => String)
  organizer: string;
}
