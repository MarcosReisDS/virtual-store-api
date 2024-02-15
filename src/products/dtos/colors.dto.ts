import { IsNotEmpty } from 'class-validator';

export class ColorsDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    value: string;
}