import { Args, Resolver, Int, Query } from "@nestjs/graphql";
import { Activities } from "./activities.model";
import { ActivitiesService } from "./activities.service";

@Resolver(of => Activities)
export class ActivitiesResolver {
    constructor(
        private activityService: ActivitiesService
    ) {}

    @Query(returns => Activities)
    async activity(@Args(
        'id', { type: () => Int }) id: number) {
        return this.activityService.create(id)
    }
}