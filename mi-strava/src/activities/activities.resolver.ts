import { Args, Resolver, Mutation } from "@nestjs/graphql";
import { Activities } from "./activities.model";
import { ActivitiesService } from "./activities.service";
import { NewActivityInput } from "./dto/newActivities.input";

@Resolver(of => Activities)
export class ActivitiesResolver {
    constructor(
        private activityService: ActivitiesService
    ) {}

    @Mutation(returns => Boolean)
    async newActivity(@Args('data') data: NewActivityInput) {
        const ret = this.activityService.create(data)
        if(!ret){
            return true
        } else {
            return false
        }
    }
}