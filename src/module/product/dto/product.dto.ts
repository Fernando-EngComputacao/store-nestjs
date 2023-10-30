import { IsNotEmpty, isNotEmpty } from "class-validator";


export class CreateProductDTO {

    @IsNotEmpty({message: 'The name canot be blank'})
    name: string;
    @IsNotEmpty({message: 'The quantity canot be blank'})
    quantity: number;
    @IsNotEmpty({message: 'The price canot be blank'})
    price: number;
    @IsNotEmpty({message: 'The qunatity canot be blank'})
    measure: string;
    
}