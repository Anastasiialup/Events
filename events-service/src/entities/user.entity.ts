import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@Schema()
@ObjectType('User')
export class User extends Document {
  constructor(props: Partial<User>) {
    super();
    Object.assign(this, props);
  }

  @Field(() => ID)
  _id: string;

  @Prop()
  @Field(() => String)
  name: string;

  @Prop()
  @Field(() => String)
  email: string;

  @Prop()
  @Field(() => String)
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
