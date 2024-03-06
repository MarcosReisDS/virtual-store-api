import { IsNotEmpty } from 'class-validator';

export class CartDto {
    @IsNotEmpty()
    image: string;

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    price: string;

    @IsNotEmpty()
    quantity: string;

    @IsNotEmpty()
    type: string;
    
    @IsNotEmpty()
    size: string;
    
    @IsNotEmpty()
    color: string;
}