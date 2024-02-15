import { IsNotEmpty } from 'class-validator';

export class AddressesDto {
    @IsNotEmpty()
    zipcode: string;

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    number: string;
}