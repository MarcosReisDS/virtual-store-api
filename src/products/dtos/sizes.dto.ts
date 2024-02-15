import { IsNotEmpty } from 'class-validator';

export class SizesDto {
    @IsNotEmpty()
	size: string
}