import {Global, Module} from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";

import Place from "../db/models/place.entity";
import {RepoService} from "./repo.service";

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([Place])],
  providers: [RepoService],
  exports: [RepoService]
})
export class RepoModule {}
