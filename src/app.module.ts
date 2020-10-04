import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import { RepoModule } from './repo/repo.module';
import { PlacesModule } from './places/places.module';

import * as typeOrmOptions from './config/orm';
import {GraphQLModule} from "@nestjs/graphql";

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmOptions),
    GraphQLModule.forRoot({ autoSchemaFile: 'schema.gql', playground: true, installSubscriptionHandlers: true }),
    RepoModule,
    PlacesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
