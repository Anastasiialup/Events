import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { User } from 'src/entities/user.entity';

@Schema()
@ObjectType('Event')
export class Event extends Document {
  constructor(props: Partial<Event>) {
    super();
    Object.assign(this, props);
  }

  @Field(() => ID)
  _id: string;

  @Prop()
  @Field(() => String)
  title: string;

  @Prop()
  @Field(() => String)
  description: string;

  @Prop()
  @Field(() => Date)
  date: Date;

  @Prop()
  @Field(() => String)
  location: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: User.name })
  @Field(() => User)
  organizer: string;
}

export const EventSchema = SchemaFactory.createForClass(Event);
