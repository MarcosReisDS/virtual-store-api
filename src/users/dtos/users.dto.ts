import { IsNotEmpty, IsEmail, MinLength, MaxLength, Matches } from 'class-validator';

export class UsersDto {
    @IsNotEmpty()
    profile: string;

    @IsNotEmpty()
    name: string;
    
    @IsNotEmpty()
    surname: string;

    @IsEmail()
    mail: string;

    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(20)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
      message: 'password too weak',
    })
    password: string;
}