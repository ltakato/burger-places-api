import {Args, Mutation, Query, Resolver} from "@nestjs/graphql";

import Place from "../db/models/place.entity";
import {RepoService} from "../repo/repo.service";
import {PlaceInput} from "./place.input";

@Resolver()
export class PlacesResolver {
  constructor(private readonly repoService: RepoService) {}

  @Query(() => [Place])
  public async places(): Promise<Place[]> {
    return this.repoService.placeRepo.find();
  }

  @Query(() => Place)
  public async place(@Args('id') id: number): Promise<Place> {
    return this.repoService.placeRepo.findOne(id);
  }

  @Mutation(() => Place)
  public async createPlace(@Args('input') input: PlaceInput): Promise<Place> {
    const createdPlace = this.repoService.placeRepo.create({ name: input.name, address: input.address });
    return this.repoService.placeRepo.save(createdPlace);
  }
}
