import { IsEmail, MinLength, IsNotEmpty } from "class-validator";
import { IsUniqueEmail } from "../validation/email-validator";

export class CreateUserDTO {

    @IsNotEmpty({message: 'The name canot be blank'})
    name: string;

    @IsUniqueEmail({message: 'The email must be unique'})
    @IsNotEmpty({message: 'The email cannot be blank'})
    email: string;

    @MinLength(6, {message: 'The password must be at least 6 characters'})
    password: string;
}