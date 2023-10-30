import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserRepository } from "src/module/user/user.repository";
import { CreateUserDTO } from "./createUser.dto";

@Controller('/user')
export class UserController {

  constructor(private userRepository: UserRepository){}

  @Post()
  async createUser(@Body() userdata: CreateUserDTO) {
    return this.userRepository.save(userdata);
  }

  @Get()
  async listUser(){
    return this.userRepository.findAll();
  }
}