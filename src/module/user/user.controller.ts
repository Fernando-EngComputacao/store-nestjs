import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserRepository } from "src/module/user/user.repository";
import { CreateUserDTO } from "./dto/createUser.dto";
import { UserEntity } from "./user.entity";
import { v4 as uuid} from 'uuid';
import { ListUserDTO } from "./dto/listUser.dto";

@Controller('/user')
export class UserController {

  constructor(private userRepository: UserRepository){}

  @Post()
  async createUser(@Body() userdata: CreateUserDTO) {
    const userEntity = new UserEntity();
    userEntity.email = userdata.email;
    userEntity.name = userdata.name;
    userEntity.password = userdata.password;
    userEntity.id = uuid();

    this.userRepository.save(userEntity)

    return {
      message: 'User created successfully',
      user: new ListUserDTO(userEntity.id, userEntity.name),
    };
  }

  @Get()
  async listUser(){
    const userSalved = await this.userRepository.findAll();
    const allUsers = userSalved.map(
      user => new ListUserDTO(
        user.id,
        user.name
      )
    );

    return allUsers;
  }
}