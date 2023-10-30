import { Injectable } from '@nestjs/common';
import { ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, registerDecorator } from "class-validator";
import { UserRepository } from '../user.repository';

@Injectable()
@ValidatorConstraint({ async: true })
export class EmailValidator implements ValidatorConstraintInterface {

    constructor(private userRepository: UserRepository) {}

    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> { 
        const usuarioComEmailExiste = await this.userRepository.existUniqueEmail(value);
        return !usuarioComEmailExiste;
    }
}

export const IsUniqueEmail = (optionsValidator: ValidationOptions) => {
    return (object: Object, propertie: string) => {
        registerDecorator({
            target: object.constructor,
            propertyName: propertie,
            options: optionsValidator,
            constraints: [],
            validator: EmailValidator
        });
    }       
}