import { Field, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType('UserInput')
export class UserInput {
  constructor(props?: Partial<UserInput>) {
    Object.assign(this, props || {});
  }

  @IsString()
  @Field(() => String)
  name: string;

  @IsString()
  @Field(() => String)
  email: string;

  @IsString()
  @Field(() => String)
  password: string;
}
