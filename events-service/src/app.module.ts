import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import {ApiModule} from './api.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: () => {
        return {
          uri: 'mongodb://localhost:27017/events-db',
          dbName: 'events-db',
        };
      },
    }),
    ApiModule,
  ],
})
export class AppModule {}
