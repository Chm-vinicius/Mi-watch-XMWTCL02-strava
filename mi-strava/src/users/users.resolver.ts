import { Args, Resolver, Int, Query } from "@nestjs/graphql";
import { User } from "./users.model";
import { UserService } from "./users.services";

@Resolver(of => User)
export class UserResolver {
    constructor(
        private userService: UserService
    ) { }

    @Query(returns => User)
    async user(@Args('id', { type: () => Int }) id: number) {
        return this.userService.create(id)
    }
}
