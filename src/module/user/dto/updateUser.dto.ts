import { IsEmail, IsNotEmpty, IsOptional, MinLength } from "class-validator";
import { IsUniqueEmail } from "../validation/email-validator";

export class UserToUpdate {

    @IsOptional()
    @IsNotEmpty({message: 'The name canot be blank'})
    name: string;

    @IsOptional()
    @IsUniqueEmail({message: 'The email must be unique'})
    @IsEmail(undefined, {message: 'The email cannot be blank'})
    email: string;

    @IsOptional()
    @MinLength(6, {message: 'The password must be at least 6 characters'}) 
    password: string;
}