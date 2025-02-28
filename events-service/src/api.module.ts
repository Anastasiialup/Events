import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule, getConnectionToken } from '@nestjs/mongoose';
import { User, UserSchema } from './entities/user.entity';
import { Event, EventSchema } from './entities/event.entity';
import { UserResolver } from './resolver/user.resolver';
import { UserService } from './service/user.service';
import { UserActions } from './actions/user.actions';
import { EventResolver } from 'src/resolver/event.resolver';
import { EventService } from 'src/service/event.service';
import { EventActions } from 'src/actions/event.actions';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: User.name,
        useFactory: () => {
          return UserSchema;
        },
        inject: [getConnectionToken('Database')],
      },
      {
        name: Event.name,
        useFactory: () => {
          return  EventSchema;
        },
        inject: [getConnectionToken('Database')],
      },
    ]),
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
      {
        name: Event.name,
        schema: EventSchema,
      },
    ])
  ],
  providers: [
    ConfigService,
    UserResolver, UserService, UserActions,
    EventResolver, EventService, EventActions,
  ],
})
export class ApiModule {}
