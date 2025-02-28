import { Field, ObjectType } from '@nestjs/graphql';
import { Event } from 'src/entities/event.entity';

@ObjectType('GetAllEvents')
export class GetAllEvents {
  @Field(() => [Event])
  events: [Event];

  @Field(() => Number)
  count: number;
}
