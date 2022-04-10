import { Injectable } from "@nestjs/common";
import { User } from "./users.model";

@Injectable()
export class UserService {
    async create(data: any): Promise<User> {
        return {} as any
    }
}