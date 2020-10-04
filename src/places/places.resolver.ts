import {Args, Mutation, Query, Resolver, Subscription} from "@nestjs/graphql";
import { PubSub } from "graphql-subscriptions";

import Place from "../db/models/place.entity";
import {RepoService} from "../repo/repo.service";
import {PlaceInput} from "./place.input";

const pubSub = new PubSub();

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
    const place = this.repoService.placeRepo.create({ name: input.name, address: input.address });
    const response = await this.repoService.placeRepo.save(place);

    await pubSub.publish('placeCreated', {
      placeCreated: place
    });

    return response;
  }

  @Subscription(() => Place)
  public placeCreated() {
    return pubSub.asyncIterator('placeCreated');
  }
}
