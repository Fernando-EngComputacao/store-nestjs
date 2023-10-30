import { Injectable } from "@nestjs/common";
import { log } from "console";

@Injectable()
export class UserRepository {
    private users = [];

    async save(user) {
        this.users.push(user);
        
    }

    async findAll(){
        return (this.users);
    }
}