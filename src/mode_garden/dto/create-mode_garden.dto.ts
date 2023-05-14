import { IsNotEmpty } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateModeGardenDto {
    @IsNotEmpty()
    garden_id: string;

    @IsNotEmpty()
    mode: string;
}