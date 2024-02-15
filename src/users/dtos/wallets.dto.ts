import { IsNotEmpty } from 'class-validator';

export class WalletsDto {
    @IsNotEmpty()
	number: string

    @IsNotEmpty()
	name: string

    @IsNotEmpty()
	security: string

    @IsNotEmpty()
	date: string
}