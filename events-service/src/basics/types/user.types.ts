import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/entities/user.entity';

@ObjectType('GetAllUsers')
export class GetAllUsers {
  @Field(() => [User])
  users: [User];

  @Field(() => Number)
  count: number;
}
