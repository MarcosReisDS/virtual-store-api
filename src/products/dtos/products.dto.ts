import { IsNotEmpty } from 'class-validator';

export class ProductsDto {
    @IsNotEmpty()
    image: string;
  
    @IsNotEmpty()
    name: string;
  
    @IsNotEmpty()
    description: string;
  
    @IsNotEmpty()
    price: string;
  
    @IsNotEmpty()
    amount: string;
}