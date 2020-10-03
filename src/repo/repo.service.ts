import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

import Place from "../db/models/place.entity";

@Injectable()
export class RepoService {
  public constructor(
    @InjectRepository(Place) public readonly placeRepo: Repository<Place>
  ) {}
}
