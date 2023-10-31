import { Injectable } from "@nestjs/common";
import { UserEntity } from "./user.entity";
import { UserToUpdate } from "./dto/updateUser.dto";

@Injectable()
export class UserRepository {
        
    private users: UserEntity[] = [];

    async save(user: UserEntity) {
        this.users.push(user);
        
    }

    async findAll(){
        return (this.users);
    }

    async existUniqueEmail(email: string) {
        const possibleUser = this.users.find(user => user.email === email);
        return possibleUser !== undefined;
    }

    async update(id: string, userToUpdate: Partial<UserEntity>) {
        const possibleUser = this.findById(id);

        Object.entries(userToUpdate).forEach(([key, value]) => {
            if (key === 'id') {
                return;
            }
            possibleUser[key] = value;
        });

        return possibleUser;
    }

    async delete(id: string) {
        const user = this.findById(id);
        this.users = this.users.filter(
            user => user.id !== id
        );        
        return user;
    }


    // Private Methods 
    private findById(id: string){
        const userToFind = this.users.find(
            user => user.id === id
        )

        if (!userToFind) {
            throw new Error('User not found');
        }

        return userToFind;
    }
    
}