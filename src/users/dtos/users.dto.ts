import { IsNotEmpty } from 'class-validator';

export class UsersDto {
    @IsNotEmpty()
    profile: string;

    @IsNotEmpty()
    name: string;
    
    @IsNotEmpty()
    surname: string;

    @IsNotEmpty()
    mail: string;

    @IsNotEmpty()
    password: string;
}