import { Module } from '@nestjs/common';

import {PlacesResolver} from "./places.resolver";

@Module({
  providers: [PlacesResolver]
})
export class PlacesModule {}
