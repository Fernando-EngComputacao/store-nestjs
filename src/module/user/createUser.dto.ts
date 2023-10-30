import { IsString, IsEmail, MinLength, IsNotEmpty } from "class-validator";

export class CreateUserDTO {

    @IsNotEmpty({message: 'The name canot be blank'})
    name: string;

    @IsEmail(null, {message: 'The email can be invalid'})
    email: string;

    @MinLength(6, {message: 'The password must be at least 6 characters'})
    password: string;
}